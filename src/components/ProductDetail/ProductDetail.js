import React, { useState, useEffect, useMemo } from "react"; // Added useMemo
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ProductDetail.css";
import { allProducts, PLATE_PRICES } from "../../data/productData"; // Import PLATE_PRICES too

const MoreLikeThese = ({ currentProduct }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Ensure allProducts is an array before filtering
  const relatedProducts = (allProducts || [])
    .filter((product) => product.brand === currentProduct.brand && product.id !== parseInt(id))
    .slice(0, 4); // Limit to 4 products for display

  // Define the "All Products" card
  const allProductsCard = {
    name: "All Products",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlBR2ORcQ2jtN8UflyNc8TibIxMm9MZz6ShJn8Pp8o8uNHwcyLO66ooW0EIYEBElivNI&usqp=CAU",
  };

  // Combine related products with the "All Products" card
  const displayProducts = [...relatedProducts, allProductsCard];

  const handleNavigate = (productId) => {
    navigate(productId ? `/product/${productId}` : "/products");
    window.scrollTo(0, 0); // Scroll to the top of the page
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
            <img src={product.image} alt={product.name} className="brand-image" />
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
              <p className="discount" style={{ fontWeight: "600", color: "#fff" }}>
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
              <p className="discount" style={{ fontSize: "0.9rem", color: "#aaa" }}>
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

  // State for configurable options
  const [selectedBaseComponents, setSelectedBaseComponents] = useState({});
  const [selectedComplementaryItems, setSelectedComplementaryItems] = useState({});
  const [selectedPlateType, setSelectedPlateType] = useState("");
  const [selectedPlates, setSelectedPlates] = useState({}); // Stores selected plate weights and quantities { '25kg': 2, '10kg': 4 }
  const [selectedAddOns, setSelectedAddOns] = useState({});

  useEffect(() => {
    // Add a check to ensure allProducts is an array before calling .find()
    if (Array.isArray(allProducts)) {
      const found = allProducts.find((item) => item.id === parseInt(id));
      setProduct(found);

      // Initialize states for configurable options when product changes
      if (found) {
        // Initialize base components
        const initialBaseComponents = {};
        found.baseComponents?.forEach(comp => {
          initialBaseComponents[comp.name] = comp.checked;
        });
        setSelectedBaseComponents(initialBaseComponents);

        // Initialize complementary items
        const initialComplementaryItems = {};
        found.complementaryItems?.forEach(item => {
            initialComplementaryItems[item.name] = item.checked;
        });
        setSelectedComplementaryItems(initialComplementaryItems);


        // Initialize plate type
        if (found.hasPlates) {
          setSelectedPlateType(found.defaultPlateType || Object.keys(PLATE_PRICES)[0]);
          setSelectedPlates({}); // Reset plates when product changes
        } else {
          setSelectedPlateType("");
          setSelectedPlates({});
        }

        // Initialize add-ons
        const initialAddOns = {};
        found.additionalAddOns?.forEach(addOn => {
          initialAddOns[addOn.name] = addOn.checked;
        });
        setSelectedAddOns(initialAddOns);
      }
    } else {
      console.error("allProducts is not an array:", allProducts);
      setProduct(null); // Or handle this case as appropriate for your app
    }
  }, [id]);

  // Calculate dynamic price
  const totalPrice = useMemo(() => {
    if (!product) return 0;

    let currentPrice = product.price;

    // Add price for selected plates
    if (product.hasPlates && selectedPlateType && PLATE_PRICES[selectedPlateType]) {
      // Check for free plates and adjust total quantity to charge for
      let platesToCharge = { ...selectedPlates };
      if (product.freePlates && product.freePlates.quantity > 0) {
        let remainingFreePlates = product.freePlates.quantity;
        // Deduct free plates from the cheapest ones first, or based on your logic
        // For simplicity, let's just deduct from the total count of selected plates
        let totalSelectedPlatesCount = Object.values(selectedPlates).reduce((sum, qty) => sum + qty, 0);
        let actualPlatesToCharge = Math.max(0, totalSelectedPlatesCount - remainingFreePlates);

        // A more complex logic for free plates would involve iterating through selected plates
        // and reducing their quantities until remainingFreePlates is 0, then summing up remaining costs.
        // For now, we'll implement a simpler overall deduction based on the total count.
        // If a specific price is given for 'free plates', that would be more complex.
        // Given 'any first two plates free', we'll assume the lowest value plates are 'free' first.
        // This current implementation just subtracts the total `priceImpact` of 2 cheapest plates.
        // This might need refinement based on how you want "any first two plates free" to work if different weights are selected.
        // For now, let's assume it means 2 plates of the selected type and lowest weight are free.
        const sortedPlateWeights = Object.keys(PLATE_PRICES[selectedPlateType]).sort((a,b) => PLATE_PRICES[selectedPlateType][a] - PLATE_PRICES[selectedPlateType][b]);

        let tempSelectedPlates = { ...selectedPlates };
        let platesCost = 0;

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

      } else {
        Object.entries(selectedPlates).forEach(([weight, quantity]) => {
          const pricePerPlate = PLATE_PRICES[selectedPlateType][weight];
          if (pricePerPlate) {
            currentPrice += pricePerPlate * quantity;
          }
        });
      }
    }

    // Add price for selected add-ons
    product.additionalAddOns?.forEach(addOn => {
      if (selectedAddOns[addOn.name]) {
        currentPrice += addOn.priceImpact;
      }
    });

    return currentPrice;
  }, [product, selectedPlateType, selectedPlates, selectedAddOns]);


  // Calculate dynamic discount (re-calculating based on total price)
  const dynamicDiscount = useMemo(() => {
    if (!product || !product.originalPrice || totalPrice === 0) return "0%";
    const calculatedDiscount = ((product.originalPrice - totalPrice) / product.originalPrice) * 100;
    return `${Math.round(calculatedDiscount)}%`;
  }, [product, totalPrice]);


  if (!product) return <div className="product-not-found">Product not found</div>;

  const images = [product.image, ...(product.additionalImages || [])];
  const videos = product.videos || [];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePlateQuantityChange = (weight, value) => {
    const quantity = parseInt(value, 10);
    setSelectedPlates(prev => {
      const newPlates = { ...prev };
      if (quantity > 0) {
        newPlates[weight] = quantity;
      } else {
        delete newPlates[weight]; // Remove if quantity is 0
      }
      return newPlates;
    });
  };

  const handleAddOnToggle = (name) => {
    setSelectedAddOns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Helper to format WhatsApp message components
  const formatWhatsappMessage = () => {
    let message = `Hi, I'm interested to buy ${product.name} with custom options.`;
    message += `\nTotal price: ₹${totalPrice}.`;
    message += `\n\nSelected items:`;

    // Base Components
    if (product.baseComponents && product.baseComponents.length > 0) {
      product.baseComponents.forEach(comp => {
        if (selectedBaseComponents[comp.name]) {
          message += `\n- ${comp.name} (Included)`;
        }
      });
    }

    // Plates
    if (product.hasPlates && selectedPlateType) {
      message += `\n- Plate Type: ${selectedPlateType}`;
      if (Object.keys(selectedPlates).length > 0) {
        Object.entries(selectedPlates).forEach(([weight, quantity]) => {
          const pricePerPlate = PLATE_PRICES[selectedPlateType][weight];
          // Account for free plates in the message if applicable
          let actualQuantity = quantity;
          let costString = `(₹${pricePerPlate} each)`;

          if (product.freePlates && product.freePlates.quantity > 0) {
            // This is a simplified representation. Actual cost is in totalPrice.
            // For a precise WhatsApp message, you might need to re-calculate individual plate costs here,
            // considering which specific plates were "free" based on your logic in totalPrice.
            // For now, let's just indicate if free plates were part of the deal.
             message += `\n- ${actualQuantity}x ${weight} plates`;
          } else {
            message += `\n- ${actualQuantity}x ${weight} plates ${costString}`;
          }
        });
      } else {
        message += `\n- No additional plates selected.`;
      }
    }

    // Add-ons
    if (product.additionalAddOns && product.additionalAddOns.length > 0) {
      const selectedAddOnsList = product.additionalAddOns.filter(addOn => selectedAddOns[addOn.name]);
      if (selectedAddOnsList.length > 0) {
        message += `\n\nAdditional Add-ons:`;
        selectedAddOnsList.forEach(addOn => {
          message += `\n- ${addOn.name} (+₹${addOn.priceImpact})`;
        });
      }
    }

    // Complementary Items
    if (product.complementaryItems && product.complementaryItems.length > 0) {
        const selectedComplementaryList = product.complementaryItems.filter(item => selectedComplementaryItems[item.name]);
        if (selectedComplementaryList.length > 0) {
            message += `\n\nComplementary Items:`;
            selectedComplementaryList.forEach(item => {
                message += `\n- ${item.name}`;
            });
        }
    }

    return encodeURIComponent(message);
  };


  return (
    <section className="product-detail">
      <button className="back-button" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      <div className="product-container">
        <div className="media-section">
          {/* ... existing media section */}
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
              <div className="main-image-container" onClick={() => setIsModalOpen(true)}>
                <img src={images[selectedImageIndex]} alt={product.name} className="main-image" />
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
                      className={`thumbnail ${selectedImageIndex === i ? "active" : ""}`}
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
                <div className="no-videos">No videos available for this product.</div>
              )}
            </div>
          )}
        </div>

        <div className="info-section">
          <h1>{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-stock">{product.stock}</p>
          <p className="product-desc">{product.description}</p>
          <p className="product-desc">(Fully Customizable with complementary stickers/labels)</p>

          {/* --- NEW CONFIGURATION UI STARTS HERE --- */}
          {product.configurable && (
            <div className="product-configuration">
              <h3 style={{color:'white'}}>Customize Your Set</h3>

              {/* Base Components (always ticked) */}
              {product.baseComponents && product.baseComponents.length > 0 && (
                <div className="config-section">
                  <h4>Included Components:</h4>
                  {product.baseComponents.map(comp => (
                    <label key={comp.name} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedBaseComponents[comp.name] || comp.checked}
                        disabled={comp.disabled}
                        onChange={() => { /* Do nothing, it's disabled */ }}
                      />
                      {comp.name}
                      {comp.priceImpact > 0 && <span className="price-impact"> (+₹{comp.priceImpact})</span>}
                    </label>
                  ))}
                </div>
              )}

              {/* Complementary Items */}
              {product.complementaryItems && product.complementaryItems.length > 0 && (
                <div className="config-section">
                  <h4>Complementary Items:</h4>
                  {product.complementaryItems.map(item => (
                    <label key={item.name} className="checkbox-label complementary-item">
                      <input
                        type="checkbox"
                        checked={selectedComplementaryItems[item.name] || item.checked}
                        disabled={item.disabled}
                        onChange={() => { /* Do nothing, it's disabled */ }}
                      />
                      {item.name}
                      {item.priceImpact > 0 && <span className="price-impact"> (+₹{item.priceImpact})</span>}
                    </label>
                  ))}
                </div>
              )}

              {/* Plate Options (if hasPlates is true) */}
              {product.hasPlates && (
                <div className="config-section">
                  <h4>Plates:</h4>
                  <div className="radio-group">
                    {Object.keys(PLATE_PRICES).map(type => (
                      <label key={type} className="radio-label">
                        <input
                          type="radio"
                          name="plateType"
                          value={type}
                          checked={selectedPlateType === type}
                          onChange={(e) => setSelectedPlateType(e.target.value)}
                        />
                        {type.replace('mini ', '').replace(' plates', '')}
                      </label>
                    ))}
                  </div>

                  {selectedPlateType && PLATE_PRICES[selectedPlateType] && (
                    <div className="plate-selection">
                      <div className="plate-header">
                        <span>Weight</span>
                        <span>Price/Plate</span>
                        <span>Quantity</span>
                      </div>
                      {Object.entries(PLATE_PRICES[selectedPlateType]).map(([weight, price]) => (
                        <div key={weight} className="plate-input-row">
                          <label className="plate-weight-label">{weight}:</label>
                          <span className="plate-price-display">₹{price}</span>
                          <input
                            type="number"
                            min="0"
                            step="2" // Plates typically come in pairs (2, 4, 6 etc.)
                            value={selectedPlates[weight] || ''}
                            onChange={(e) => handlePlateQuantityChange(weight, e.target.value)}
                            placeholder="Qty"
                            className="plate-quantity-input"
                          />
                        </div>
                      ))}
                      {product.freePlates && product.freePlates.quantity > 0 && (
                         <p className="free-plates-info">
                           Includes {product.freePlates.quantity} free plates of your choice!
                         </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Additional Add-Ons */}
              {product.additionalAddOns && product.additionalAddOns.length > 0 && (
                <div className="config-section">
                  <h4>Optional Add-Ons:</h4>
                  {product.additionalAddOns.map(addOn => (
                    <label key={addOn.name} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedAddOns[addOn.name]}
                        onChange={() => handleAddOnToggle(addOn.name)}
                      />
                      {addOn.name} (+₹{addOn.priceImpact})
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* --- NEW CONFIGURATION UI ENDS HERE --- */}

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
            🚨 <strong>Limited-Time Deal:</strong> Save big while it lasts — early birds always win.
          </div>

          <div className="price-info">
            <span className="current-price">₹{totalPrice}</span> {/* Use totalPrice here */}
            {product.originalPrice && (
              <>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">{dynamicDiscount}</span> {/* Use dynamicDiscount */}
              </>
            )}
          </div>

          {/* {product.offer && (
            <div
              className="newnewclass"
              style={{
                background: "rgb(219, 216, 207)",
                borderLeft: "5px solid rgb(219, 216, 207)",
                padding: "14px 18px",
                margin: "20px 0",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "12px",
                color: "black",
                boxShadow: "0 0 10px rgba(185, 181, 165, 0.2)",
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: product.offer }}></span>
            </div>
          )} */}

          

          <button
            style={{ background: "rgb(136, 135, 131)" }}
            className="whatsapp-button"
            onClick={() =>
              window.open(
                `https://wa.me/+919354840793?text=${formatWhatsappMessage()}`, // Use the new formatted message
                "_blank"
              )
            }
          >
            <FaWhatsapp className="whatsapp-icon" /> DM to Order (+91 9354840793)
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
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
                      </td>
                      <td>{value}</td>
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
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>
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
                  className={`modal-thumbnail ${selectedImageIndex === i ? "active" : ""}`}
                  onClick={() => setSelectedImageIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <MoreLikeThese currentProduct={product} />
    </section>
  );
};

export default ProductDetail;