import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoIosCart } from "react-icons/io";
import "./ProductDetail.css";
import { allProducts, PLATE_PRICES } from "../../data/productData";
import FeedbackSection from "../FeedbackSection/FeedbackSection";

const MoreLikeThese = ({ currentProduct }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const relatedProducts = (allProducts || [])
    .filter(
      (product) =>
        product.brand === currentProduct.brand && product.id !== parseInt(id)
    )
    .slice(0, 4);

  const allProductsCard = {
    name: "All Products",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlBR2ORcQ2jtN8UflyNc8TibIxMm9MZz6ShJn8TibIxMm9MZz6ShJn8Pp8o8uNHwcyLO66ooW0EIYEBElivNI&usqp=CAU",
  };

  const displayProducts = [...relatedProducts, allProductsCard];

  const handleNavigate = (productId) => {
    navigate(productId ? `/product/${productId}` : "/products");
    window.scrollTo(0, 0);
  };

  return (
    <section className="brand-offers">
      <h2 className="section-title-top">MORE LIKE THESE</h2>
      <p className="section-titlee" style={{ fontSize: "20px" }}>
        Explore more from {currentProduct.brand}
      </p>
      <div className="brand-grid">
        {displayProducts.map((product, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() => handleNavigate(product.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="brand-image"
            />
            <h3>{product.name}</h3>
            {product.badge && (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(212, 175, 55, 0.15)",
                  color: "#d4af37",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  margin: "6px 0",
                }}
              >
                {product.badge}
              </span>
            )}
            {product.price && (
              <p
                className="discount"
                style={{ fontWeight: "600", color: "#fff" }}
              >
                <span
                  className="cross_original"
                  style={{ textDecoration: "line-through", color: "#888" }}
                >
                  ₹{product.originalPrice}
                </span>{" "}
                ₹{product.price}
              </p>
            )}
            {!product.price && (
              <p
                className="discount"
                style={{ fontSize: "0.9rem", color: "#aaa" }}
              >
                Explore the full collection →
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("images");

  // State for pop-up message
  const [message, setMessage] = useState({ show: false, text: '', type: '' });

  const [selectedBaseComponents, setSelectedBaseComponents] = useState({});
  const [selectedComplementaryItems, setSelectedComplementaryItems] = useState(
    {}
  );
  const [selectedPlateType, setSelectedPlateType] = useState("");
  const [selectedPlates, setSelectedPlates] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const ADDON_DISCOUNT_PERCENTAGE = 15;

  useEffect(() => {
    if (Array.isArray(allProducts)) {
      const found = allProducts.find((item) => item.id === parseInt(id));
      setProduct(found);

      if (found) {
        const initialBaseComponents = {};
        found.baseComponents?.forEach((comp) => {
          initialBaseComponents[comp.name] = comp.checked;
        });
        setSelectedBaseComponents(initialBaseComponents);

        const initialComplementaryItems = {};
        found.complementaryItems?.forEach((item) => {
          initialComplementaryItems[item.name] = item.checked;
        });
        setSelectedComplementaryItems(initialComplementaryItems);

        if (found.hasPlates) {
          setSelectedPlateType(found.defaultPlateType || "mini bumper plates");
          setSelectedPlates({});
        } else {
          setSelectedPlateType("");
          setSelectedPlates({});
        }

        const initialAddOns = {};
        found.additionalAddOns?.forEach((addOn) => {
          initialAddOns[addOn.name] = addOn.checked;
        });
        setSelectedAddOns(initialAddOns);
      }
    } else {
      console.error("allProducts is not an array:", allProducts);
      setProduct(null);
    }
  }, [id]);

  const dynamicOriginalPrice = useMemo(() => {
    if (!product) return 0;
    let originalPrice = product.originalPrice;
    if (product.configurable) {
      product.additionalAddOns?.forEach(addOn => {
        if (selectedAddOns[addOn.name]) {
          originalPrice += addOn.priceImpact;
        }
      });
      if (product.hasPlates && selectedPlateType && PLATE_PRICES[selectedPlateType]) {
        let platesOriginalCost = 0;
        Object.entries(selectedPlates).forEach(([weight, quantity]) => {
            const pricePerPlate = PLATE_PRICES[selectedPlateType][weight];
            if (pricePerPlate) {
                platesOriginalCost += pricePerPlate * quantity;
            }
        });
        originalPrice += platesOriginalCost;
      }
    }
    return originalPrice;
  }, [product, selectedAddOns, selectedPlates, selectedPlateType]);

  const totalPrice = useMemo(() => {
    if (!product) return 0;

    let currentPrice = product.price;

    if (
      product.hasPlates &&
      selectedPlateType &&
      PLATE_PRICES[selectedPlateType]
    ) {
      let remainingFreePlates = product.freePlates?.quantity || 0;
      const sortedPlateWeights = Object.keys(
        PLATE_PRICES[selectedPlateType]
      ).sort(
        (a, b) =>
          PLATE_PRICES[selectedPlateType][a] -
          PLATE_PRICES[selectedPlateType][b]
      );
      let platesCost = 0;
      const tempSelectedPlates = { ...selectedPlates };
      for (const weight of sortedPlateWeights) {
        let quantity = tempSelectedPlates[weight] || 0;
        if (quantity > 0) {
          if (remainingFreePlates > 0) {
            const deducted = Math.min(quantity, remainingFreePlates);
            quantity -= deducted;
            remainingFreePlates -= deducted;
          }
          platesCost += quantity * PLATE_PRICES[selectedPlateType][weight];
        }
      }
      currentPrice += platesCost;
    }

    product.additionalAddOns?.forEach((addOn) => {
      if (selectedAddOns[addOn.name]) {
        const discountedPrice =
          addOn.priceImpact * (1 - ADDON_DISCOUNT_PERCENTAGE / 100);
        currentPrice += discountedPrice;
      }
    });

    return Math.round(currentPrice);
  }, [
    product,
    selectedPlateType,
    selectedPlates,
    selectedAddOns,
    ADDON_DISCOUNT_PERCENTAGE,
  ]);

  const dynamicDiscount = useMemo(() => {
    if (!product || !dynamicOriginalPrice || totalPrice === 0) return "0%";
    const calculatedDiscount =
      ((dynamicOriginalPrice - totalPrice) / dynamicOriginalPrice) * 100;
    if (calculatedDiscount < 0) return "0%";
    return `${Math.round(calculatedDiscount)}%`;
  }, [product, totalPrice, dynamicOriginalPrice]);

  const dynamicQuantity = useMemo(() => {
    if (!product) return "N/A";

    let components = [];
    product.baseComponents?.forEach((comp) => {
      if (selectedBaseComponents[comp.name]) {
        components.push(comp.name);
      }
    });

    if (
      product.hasPlates &&
      selectedPlateType &&
      Object.keys(selectedPlates).length > 0
    ) {
      const plateDescriptions = Object.entries(selectedPlates)
        .map(([weight, qty]) => `${qty}x${weight} ${selectedPlateType}`)
        .join(", ");
      if (plateDescriptions) {
        components.push(plateDescriptions);
      }
    } else if (product.hasPlates && !Object.keys(selectedPlates).length) {
      components.push("No plates selected");
    }

    product.additionalAddOns?.forEach((addOn) => {
      if (selectedAddOns[addOn.name]) {
        components.push(addOn.name);
      }
    });

    product.complementaryItems?.forEach((item) => {
      if (selectedComplementaryItems[item.name]) {
        components.push(`${item.name} (Complementary)`);
      }
    });

    if (components.length === 0) {
      return product.specs?.quantity || "N/A";
    }

    return components.join(" + ");
  }, [
    product,
    selectedBaseComponents,
    selectedPlateType,
    selectedPlates,
    selectedAddOns,
    selectedComplementaryItems,
  ]);

  if (!product)
    return <div className="product-not-found">Product not found</div>;

  const images = [product.image, ...(product.additionalImages || [])];
  const videos = product.videos || [];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleDecreasePlateQuantity = (weight) => {
    setSelectedPlates(prev => {
        const newPlates = { ...prev };
        const currentQty = newPlates[weight] || 0;
        if (currentQty > 0) {
            newPlates[weight] = currentQty - 1;
        }
        if (newPlates[weight] === 0) {
            delete newPlates[weight];
        }
        return newPlates;
    });
  };

  const handleIncreasePlateQuantity = (weight) => {
    setSelectedPlates(prev => {
        const newPlates = { ...prev };
        const currentQty = newPlates[weight] || 0;
        newPlates[weight] = currentQty + 1;
        return newPlates;
    });
  };

  const handlePlateQuantityChange = (weight, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      setSelectedPlates((prev) => {
        const newPlates = { ...prev };
        if (quantity > 0) {
          newPlates[weight] = quantity;
        } else {
          delete newPlates[weight];
        }
        return newPlates;
      });
    }
  };

  const handleAddOnToggle = (name) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const formatWhatsappMessage = () => {
    let message = `Hi, I'm interested to buy ${product.name} with custom options.`;
    message += `\nTotal price: ₹${totalPrice}.`;
    message += `\n\nSelected items:`;

    if (product.baseComponents && product.baseComponents.length > 0) {
      product.baseComponents.forEach((comp) => {
        if (selectedBaseComponents[comp.name]) {
          message += `\n- ${comp.name} (Included)`;
        }
      });
    }

    if (product.hasPlates && selectedPlateType) {
      message += `\n- Plate Type: ${selectedPlateType}`;
      if (Object.keys(selectedPlates).length > 0) {
        let remainingFreePlates = product.freePlates?.quantity || 0;
        const sortedPlateWeights = Object.keys(
          PLATE_PRICES[selectedPlateType]
        ).sort(
          (a, b) =>
            PLATE_PRICES[selectedPlateType][a] -
            PLATE_PRICES[selectedPlateType][b]
        );
        let tempSelectedPlatesForMsg = { ...selectedPlates };

        for (const weight of sortedPlateWeights) {
          let quantity = tempSelectedPlatesForMsg[weight] || 0;
          if (quantity > 0) {
            let displayPrice = PLATE_PRICES[selectedPlateType][weight];
            let displayCost = `(₹${displayPrice} each)`;
            let status = "";
            if (remainingFreePlates > 0) {
              const deducted = Math.min(quantity, remainingFreePlates);
              if (deducted > 0) {
                status = ` (${deducted} free)`;
                quantity -= deducted;
                remainingFreePlates -= deducted;
              }
            }
            message += `\n- ${
              tempSelectedPlatesForMsg[weight]
            }x ${weight} plates ${quantity > 0 ? displayCost : ""}${status}`;
          }
        }
      } else {
        message += `\n- No additional plates selected.`;
      }
    }

    if (product.additionalAddOns && product.additionalAddOns.length > 0) {
      const selectedAddOnsList = product.additionalAddOns.filter(
        (addOn) => selectedAddOns[addOn.name]
      );
      if (selectedAddOnsList.length > 0) {
        message += `\n\nAdditional Add-ons:`;
        selectedAddOnsList.forEach((addOn) => {
          const discountedPrice = Math.round(
            addOn.priceImpact * (1 - ADDON_DISCOUNT_PERCENTAGE / 100)
          );
          message += `\n- ${addOn.name} (+₹${discountedPrice})`;
        });
      }
    }

    if (product.complementaryItems && product.complementaryItems.length > 0) {
      const selectedComplementaryList = product.complementaryItems.filter(
        (item) => selectedComplementaryItems[item.name]
      );
      if (selectedComplementaryList.length > 0) {
        message += `\n\nComplementary Items:`;
        selectedComplementaryList.forEach((item) => {
          message += `\n- ${item.name}`;
        });
      }
    }

    return encodeURIComponent(message);
  };
  
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      totalPrice: totalPrice,
      originalPrice: dynamicOriginalPrice,
      discount: dynamicDiscount,
      selectedOptions: {
        baseComponents: product.baseComponents?.filter(comp => selectedBaseComponents[comp.name]) || [],
        complementaryItems: product.complementaryItems?.filter(item => selectedComplementaryItems[item.name]) || [],
        plateType: selectedPlateType,
        plates: selectedPlates,
        addOns: product.additionalAddOns?.filter(addOn => selectedAddOns[addOn.name]) || [],
      },
      quantity: 1, // Default quantity for new items
    };
    
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Show the pop-up message
    setMessage({ show: true, text: `${product.name} added to cart!`, type: 'success' });
    setTimeout(() => {
      setMessage({ show: false, text: '', type: '' });
    }, 3000);
  };
  
  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <section className="product-detail">
      <style>
        {`
          /* Pop-up message styling */
          .added-to-cart-popup {
            position: fixed;
            top: 133px;
            right: -9px;
            transform: translateX(120%); /* Start off-screen */
            background-color: #333;
            color: black;
            padding: 15px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transition: transform 0.5s ease-in-out;
            font-size: 1rem;
            font-weight: 600;
            white-space: nowrap;
          }

          .added-to-cart-popup.show {
            transform: translateX(0); /* Slide into view */
          }

          .added-to-cart-popup.success {
            background-color: #28a745; /* Green */
          }
          
          .added-to-cart-popup.info {
            background-color: #007bff; /* Blue */
          }
          
          @media (max-width: 420px) {
            .product-configuration {
              width: 100% !important;
              margin: 0 !important;
              padding: 15px !important;
              box-sizing: border-box !important;
            }
            .price-info {
              flex-direction: column;
              align-items: flex-start;
              gap: 5px;
            }
            .current-price {
              margin-bottom: 5px;
            }
            .custom-quantity-input-container {
              display: flex;
              align-items: center;
              gap: 8px;
              justify-content: flex-end;
            }
            .custom-quantity-btn {
              background-color: #333;
              color: #fff   ;
              border: none;
              border-radius: 4px;
              width: 30px;
              height: 30px;
              font-size: 1.2rem;
              cursor: pointer;
              transition: background-color 0.2s ease;
            }
            .custom-quantity-btn:hover {
                background-color: #555;
            }
            .custom-quantity-input {
              width: 50px;
              padding: 5px;
              text-align: center;
              background-color: #000;
              color: #fff;
              border: 1px solid #555;
              border-radius: 4px;
              -moz-appearance: textfield;
              appearance: none;
            }
            .custom-quantity-input::-webkit-outer-spin-button,
            .custom-quantity-input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
          }
        `}
      </style>
      <button className="back-button" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      {/* The pop-up message */}
      <div className={`added-to-cart-popup ${message.show ? 'show' : ''} ${message.type}`}>
        {message.text}
      </div>

      <div className="product-container">
        <div className="media-section">
          <div className="tab-container">
            <button
              className={`tab-button ${activeTab === "images" ? "active" : ""}`}
              onClick={() => setActiveTab("images")}
            >
              Images
            </button>
            <button
              className={`tab-button ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>

          {activeTab === "images" && (
            <div className="images-tab">
              <div
                className="main-image-container"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  className="main-image"
                />
                {images.length > 1 && (
                  <>
                    <button
                      className="prev-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      className="next-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                    >
                      <IoIosArrowForward />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="thumbnail-container">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className={`thumbnail ${
                        selectedImageIndex === i ? "active" : ""
                      }`}
                      onClick={() => setSelectedImageIndex(i)}
                      alt={`${product.name} thumbnail ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="videos-tab">
              {videos.length > 0 ? (
                <div className="video-container">
                  {videos.map((video, i) => (
                    <video
                      key={i}
                      src={video}
                      controls
                      className="product-video"
                      aria-label={`${product.name} video ${i + 1}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-videos">
                  No videos available for this product.
                </div>
              )}
            </div>
          )}
        </div>

        <div className="info-section">
          <h1>{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-stock">{product.stock}</p>
          <p className="product-desc">{product.description}</p>

          {product.configurable && (
            <div className="product-configuration">
              <h3 style={{ color: "white" }}>Customize Your Set</h3>

              {product.baseComponents && product.baseComponents.length > 0 && (
                <div className="config-section">
                  <h4>Included Components:</h4>
                  {product.baseComponents.map((comp) => (
                    <label key={comp.name} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={
                          selectedBaseComponents[comp.name] || comp.checked
                        }
                        disabled={comp.disabled}
                        onChange={() => {}}
                      />
                      {comp.name}
                      {comp.priceImpact > 0 && (
                        <span className="price-impact">
                          {" "}
                          (+₹{comp.priceImpact})
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              )}

              {product.complementaryItems &&
                product.complementaryItems.length > 0 && (
                  <div className="config-section">
                    <h4>Complementary Items:</h4>
                    {product.complementaryItems.map((item) => (
                      <label
                        key={item.name}
                        className="checkbox-label complementary-item"
                      >
                        <input
                          type="checkbox"
                          checked={
                            selectedComplementaryItems[item.name] ||
                            item.checked
                          }
                          disabled={item.disabled}
                          onChange={() => {}}
                        />
                        {item.name}
                        {item.priceImpact > 0 && (
                          <span className="price-impact">
                            {" "}
                            (+₹{item.priceImpact})
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                )}

              {product.hasPlates && (
                <div className="config-section">
                  <h4>Plates:</h4>
                  <div className="radio-group">
                    {Object.keys(PLATE_PRICES).map((type) => (
                      <label key={type} className="radio-label">
                        <input
                          type="radio"
                          name="plateType"
                          value={type}
                          checked={selectedPlateType === type}
                          onChange={(e) => setSelectedPlateType(e.target.value)}
                        />
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </label>
                    ))}
                  </div>

                  {selectedPlateType && PLATE_PRICES[selectedPlateType] && (
                    <div className="plate-selection">
                      <div className="plate-header">
                        <span>Weight</span>
                        <span>Quantity</span>
                      </div>
                      {Object.entries(PLATE_PRICES[selectedPlateType]).map(
                        ([weight, price]) => (
                          <div key={weight} className="plate-input-row">
                            <label className="plate-weight-label">
                              {weight}:
                            </label>
                            <div className="custom-quantity-input-container">
                                <button className="custom-quantity-btn" onClick={() => handleDecreasePlateQuantity(weight)}>-</button>
                                <input
                                    type="number"
                                    min="0"
                                    step="1"
                                    value={selectedPlates[weight] || ""}
                                    onChange={(e) => handlePlateQuantityChange(weight, e.target.value)}
                                    placeholder="Qty"
                                    className="custom-quantity-input"
                                />
                                <button className="custom-quantity-btn" onClick={() => handleIncreasePlateQuantity(weight)}>+</button>
                            </div>
                          </div>
                        )
                      )}
                      {product.freePlates &&
                        product.freePlates.quantity > 0 && (
                          <p className="free-plates-info">
                            Any first {product.freePlates.quantity} plates of
                            your choice are on us!
                          </p>
                        )}
                    </div>
                  )}
                </div>
              )}

              {product.additionalAddOns &&
                product.additionalAddOns.length > 0 && (
                  <div className="config-section">
                    <h4>Optional Add-Ons:</h4>
                    {product.additionalAddOns.map((addOn) => {
                      const discountedPrice = Math.round(
                        addOn.priceImpact * (1 - ADDON_DISCOUNT_PERCENTAGE / 100)
                      );
                      return (
                        <label
                          key={addOn.name}
                          className="checkbox-label addon-label"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAddOns[addOn.name]}
                            onChange={() => handleAddOnToggle(addOn.name)}
                          />
                          <span className="addon-name">{addOn.name}</span>
                          <span className="price-container">
                            <span className="final-addon-price">
                              ₹{discountedPrice}
                            </span>
                            <span className="original-addon-price">
                              ₹{addOn.priceImpact}
                            </span>
                            <span className="addon-discount-badge">-15%</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
            </div>
          )}

          <div
            className="newnewclass"
            style={{
              background: "rgb(219, 216, 207)",
              borderLeft: "5px solid rgb(219, 216, 207)",
              padding: "14px 18px",
              margin: "20px 0",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "14px",
              color: "black",
              boxShadow: "0 0 10px rgba(185, 181, 165, 0.2)",
            }}
          >
            🚨 <strong>Limited-Time Deal:</strong> Save big while it lasts —
            early birds always win.
          </div>

          <div className="price-info">
            <span className="current-price">₹{totalPrice}</span>
            {dynamicOriginalPrice && (
              <>
                <span className="original-price">₹{dynamicOriginalPrice}</span>
                <span className="discount">{dynamicDiscount}</span>
              </>
            )}
          </div>

          <button
            style={{ background: "#d4af37", marginBottom: '10px' }}
            className="whatsapp-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          
          <button
            style={{ background: "#333",alignItems:'center', border: '1px solid #555' }}
            className="whatsapp-button"
            onClick={() => navigate('/cart')}
          >
            Go to Cart
          </button>


          {product.longDescription && (
            <div className="product-long-desc">
              <h3>Details</h3>
              <p>{product.longDescription}</p>
            </div>
          )}
          {product.specs && (
            <div className="product-specs">
              <h3>Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td>
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </strong>
                      </td>
                      <td>
                        {key === "quantity" && product.configurable
                          ? dynamicQuantity
                          : value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && activeTab === "images" && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <div className="modal-image-container">
              <img
                src={images[selectedImageIndex]}
                alt={`${product.name} preview`}
                className="modal-main-image"
              />
              {images.length > 1 && (
                <>
                  <button className="prev-modal" onClick={handlePrevImage}>
                    <IoIosArrowBack />
                  </button>
                  <button className="next-modal" onClick={handleNextImage}>
                    <IoIosArrowForward />
                  </button>
                </>
              )}
            </div>
            <div className="modal-thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className={`modal-thumbnail ${
                    selectedImageIndex === i ? "active" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <MoreLikeThese currentProduct={product} />

      <FeedbackSection />
    </section>
  );
};

export default ProductDetail;