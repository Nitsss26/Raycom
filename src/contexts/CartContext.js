// // // // "use client"

// // // // import { createContext, useContext, useState, useEffect } from "react"

// // // // const CartContext = createContext()

// // // // export const useCart = () => useContext(CartContext)

// // // // export const CartProvider = ({ children }) => {
// // // //   const [cart, setCart] = useState([])

// // // //   // Load cart from localStorage on initial render
// // // //   useEffect(() => {
// // // //     const savedCart = localStorage.getItem("cart")
// // // //     if (savedCart) {
// // // //       try {
// // // //         setCart(JSON.parse(savedCart))
// // // //       } catch (error) {
// // // //         console.error("Failed to parse cart from localStorage:", error)
// // // //         setCart([])
// // // //       }
// // // //     }
// // // //   }, [])

// // // //   // Save cart to localStorage whenever it changes
// // // //   useEffect(() => {
// // // //     localStorage.setItem("cart", JSON.stringify(cart))
// // // //   }, [cart])

// // // //   const addToCart = (product) => {
// // // //     setCart((prevCart) => {
// // // //       // Check if product already exists in cart
// // // //       const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)

// // // //       if (existingItemIndex !== -1) {
// // // //         // Update quantity if product already in cart
// // // //         const updatedCart = [...prevCart]
// // // //         updatedCart[existingItemIndex] = {
// // // //           ...updatedCart[existingItemIndex],
// // // //           quantity: updatedCart[existingItemIndex].quantity + (product.quantity || 1),
// // // //         }
// // // //         return updatedCart
// // // //       } else {
// // // //         // Add new product to cart
// // // //         return [...prevCart, { ...product, quantity: product.quantity || 1 }]
// // // //       }
// // // //     })
// // // //   }

// // // //   const updateQuantity = (productId, quantity) => {
// // // //     setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
// // // //   }

// // // //   const removeFromCart = (productId) => {
// // // //     setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
// // // //   }

// // // //   const clearCart = () => {
// // // //     setCart([])
// // // //   }

// // // //   return (
// // // //     <CartContext.Provider
// // // //       value={{
// // // //         cart,
// // // //         addToCart,
// // // //         updateQuantity,
// // // //         removeFromCart,
// // // //         clearCart,
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   )
// // // // }

// // // "use client"

// // // import { createContext, useContext, useState, useEffect } from "react"
// // // import { toast } from "react-toastify"

// // // const CartContext = createContext()

// // // export const useCart = () => useContext(CartContext)

// // // export const CartProvider = ({ children }) => {
// // //   const [cart, setCart] = useState([])
// // //   const [loading, setLoading] = useState(false)

// // //   // Load cart from localStorage on initial render
// // //   useEffect(() => {
// // //     const savedCart = localStorage.getItem("cart")
// // //     if (savedCart) {
// // //       try {
// // //         setCart(JSON.parse(savedCart))
// // //       } catch (error) {
// // //         console.error("Failed to parse cart from localStorage:", error)
// // //         setCart([])
// // //       }
// // //     }
// // //   }, [])

// // //   // Save cart to localStorage whenever it changes
// // //   useEffect(() => {
// // //     localStorage.setItem("cart", JSON.stringify(cart))
// // //   }, [cart])

// // //   const addToCart = (product) => {
// // //     setCart((prevCart) => {
// // //       // Check if product already exists in cart
// // //       const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)

// // //       if (existingItemIndex !== -1) {
// // //         // Update quantity if product already in cart
// // //         const updatedCart = [...prevCart]
// // //         updatedCart[existingItemIndex] = {
// // //           ...updatedCart[existingItemIndex],
// // //           quantity: updatedCart[existingItemIndex].quantity + (product.quantity || 1),
// // //         }
// // //         toast.success(`Updated ${product.name} quantity in cart`)
// // //         return updatedCart
// // //       } else {
// // //         // Add new product to cart
// // //         toast.success(`Added ${product.name} to cart`)
// // //         return [...prevCart, { ...product, quantity: product.quantity || 1 }]
// // //       }
// // //     })
// // //   }

// // //   const updateQuantity = (productId, quantity) => {
// // //     if (quantity <= 0) {
// // //       return removeFromCart(productId)
// // //     }

// // //     setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
// // //   }

// // //   const removeFromCart = (productId) => {
// // //     setCart((prevCart) => {
// // //       const product = prevCart.find((item) => item.id === productId)
// // //       if (product) {
// // //         toast.info(`Removed ${product.name} from cart`)
// // //       }
// // //       return prevCart.filter((item) => item.id !== productId)
// // //     })
// // //   }

// // //   const clearCart = () => {
// // //     setCart([])
// // //     toast.info("Cart has been cleared")
// // //   }

// // //   const calculateSubtotal = () => {
// // //     return cart.reduce((total, item) => {
// // //       return total + (item.price || 0) * item.quantity
// // //     }, 0)
// // //   }

// // //   const getCartCount = () => {
// // //     return cart.reduce((total, item) => total + item.quantity, 0)
// // //   }

// // //   return (
// // //     <CartContext.Provider
// // //       value={{
// // //         cart,
// // //         loading,
// // //         addToCart,
// // //         updateQuantity,
// // //         removeFromCart,
// // //         clearCart,
// // //         calculateSubtotal,
// // //         getCartCount,
// // //       }}
// // //     >
// // //       {children}
// // //     </CartContext.Provider>
// // //   )
// // // }

// // "use client"

// // import { createContext, useContext, useState, useEffect } from "react"
// // import { toast } from "react-toastify"

// // const CartContext = createContext()

// // export const useCart = () => useContext(CartContext)

// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([])
// //   const [loading, setLoading] = useState(false)

// //   // Load cart from localStorage on initial render
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("cart")
// //     if (savedCart) {
// //       try {
// //         setCart(JSON.parse(savedCart))
// //       } catch (error) {
// //         console.error("Failed to parse cart from localStorage:", error)
// //         setCart([])
// //       }
// //     }
// //   }, [])

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart))
// //   }, [cart])

// //   const addToCart = (product) => {
// //     setCart((prevCart) => {
// //       // Check if product already exists in cart
// //       const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)

// //       if (existingItemIndex !== -1) {
// //         // Update quantity if product already in cart
// //         const updatedCart = [...prevCart]
// //         updatedCart[existingItemIndex] = {
// //           ...updatedCart[existingItemIndex],
// //           quantity: updatedCart[existingItemIndex].quantity + (product.quantity || 1),
// //         }
// //         toast.success(`Updated ${product.name} quantity in cart`)
// //         return updatedCart
// //       } else {
// //         // Add new product to cart
// //         toast.success(`Added ${product.name} to cart`)
// //         return [...prevCart, { ...product, quantity: product.quantity || 1 }]
// //       }
// //     })
// //   }

// //   const updateQuantity = (productId, quantity) => {
// //     if (quantity <= 0) {
// //       return removeFromCart(productId)
// //     }

// //     setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
// //   }

// //   const removeFromCart = (productId) => {
// //     setCart((prevCart) => {
// //       const product = prevCart.find((item) => item.id === productId)
// //       if (product) {
// //         toast.info(`Removed ${product.name} from cart`)
// //       }
// //       return prevCart.filter((item) => item.id !== productId)
// //     })
// //   }

// //   const clearCart = () => {
// //     setCart([])
// //     toast.info("Cart has been cleared")
// //   }

// //   const calculateSubtotal = () => {
// //     return cart.reduce((total, item) => {
// //       return total + (item.price || 0) * item.quantity
// //     }, 0)
// //   }

// //   const getCartCount = () => {
// //     return cart.reduce((total, item) => total + item.quantity, 0)
// //   }

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         cart,
// //         loading,
// //         addToCart,
// //         updateQuantity,
// //         removeFromCart,
// //         clearCart,
// //         calculateSubtotal,
// //         getCartCount,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   )
// // }



// "use client"
// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"

// const CartContext = createContext()

// export const useCart = () => useContext(CartContext)

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([])
//   const [loading, setLoading] = useState(false)

//   // Load cart from localStorage on initial render
//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("cart")
//       if (savedCart && savedCart !== "undefined") {
//         const parsedCart = JSON.parse(savedCart)
//         if (Array.isArray(parsedCart)) {
//           setCart(parsedCart)
//           console.log("Loaded cart from storage:", parsedCart)
//         } else {
//           console.error("Saved cart is not an array:", parsedCart)
//           setCart([])
//         }
//       }
//     } catch (error) {
//       console.error("Failed to parse cart from localStorage:", error)
//       setCart([])
//     }
//   }, [])

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("cart", JSON.stringify(cart))
//       console.log("Saved cart to storage:", cart)
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error)
//     }
//   }, [cart])

//   const addToCart = (product) => {
//     // If product doesn't have an ID, use model as the identifier
//     const productId = product.id || product.model

//     if (!productId) {
//       console.error("Product has no ID or model number:", product)
//       toast.error("Could not add product to cart")
//       return
//     }

//     console.log("Adding to cart, product ID:", productId)

//     setCart((prevCart) => {
//       // Make sure prevCart is an array
//       const currentCart = Array.isArray(prevCart) ? prevCart : []

//       // Check if product already exists in cart using either id or model
//       const existingItemIndex = currentCart.findIndex(
//         (item) => (item.id && item.id === productId) || (item.model && item.model === product.model)
//       )

//       if (existingItemIndex !== -1) {
//         // Update quantity if product already in cart
//         const updatedCart = [...currentCart]
//         updatedCart[existingItemIndex] = {
//           ...updatedCart[existingItemIndex],
//           quantity: updatedCart[existingItemIndex].quantity + 1,
//         }
//         toast.success(`Updated ${product.name} quantity in cart`)
//         return updatedCart
//       } else {
//         // Add new product to cart with a consistent ID
//         const productWithId = {
//           ...product,
//           id: productId, // Make sure we have a consistent ID
//           quantity: 1
//         }
//         toast.success(`Added ${product.name} to cart`)
//         return [...currentCart, productWithId]
//       }
//     })
//   }

//   const updateQuantity = (productId, quantity) => {
//     if (!productId) {
//       console.error("Invalid productId for updateQuantity:", productId)
//       return
//     }

//     if (quantity <= 0) {
//       return removeFromCart(productId)
//     }

//     setCart((prevCart) => {
//       if (!Array.isArray(prevCart)) return []
//       return prevCart.map((item) => {
//         const itemId = item.id || item.model
//         return itemId === productId ? { ...item, quantity } : item
//       })
//     })
//   }

//   const removeFromCart = (productId) => {
//     if (!productId) {
//       console.error("Invalid productId for removeFromCart:", productId)
//       return
//     }

//     setCart((prevCart) => {
//       if (!Array.isArray(prevCart)) return []

//       const product = prevCart.find((item) => (item.id || item.model) === productId)
//       if (product) {
//         toast.info(`Removed ${product.name} from cart`)
//       }
//       return prevCart.filter((item) => (item.id || item.model) !== productId)
//     })
//   }

//   const clearCart = () => {
//     setCart([])
//     localStorage.removeItem("cart")
//     toast.info("Cart has been cleared")
//   }

//   const calculateSubtotal = () => {
//     if (!Array.isArray(cart)) return 0
//     return cart.reduce((total, item) => {
//       return total + (item.price || 0) * item.quantity
//     }, 0)
//   }

//   const getCartCount = () => {
//     if (!Array.isArray(cart)) return 0
//     return cart.reduce((total, item) => total + item.quantity, 0)
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         loading,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         clearCart,
//         calculateSubtotal,
//         getCartCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      if (savedCart && savedCart !== "undefined") {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart)
          console.log("Loaded cart from storage:", parsedCart)
        } else {
          console.error("Saved cart is not an array:", parsedCart)
          setCart([])
        }
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error)
      setCart([])
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart))
      console.log("Saved cart to storage:", cart)
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error)
    }
  }, [cart])

  const addToCart = (product) => {
    // If product doesn't have an ID, use model as the identifier
    const productId = product.id || product.model

    if (!productId) {
      console.error("Product has no ID or model number:", product)
      toast.error("Could not add product to cart")
      return
    }

    console.log("Adding to cart, product ID:", productId)

    setCart((prevCart) => {
      // Make sure prevCart is an array
      const currentCart = Array.isArray(prevCart) ? prevCart : []

      // Check if product already exists in cart using either id or model
      const existingItemIndex = currentCart.findIndex(
        (item) => (item.id && item.id === productId) || (item.model && item.model === product.model)
      )

      if (existingItemIndex !== -1) {
        // Update quantity if product already in cart
        const updatedCart = [...currentCart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        }
        toast.success(`Updated ${product.name} quantity in cart`)
        return updatedCart
      } else {
        // Add new product to cart with a consistent ID
        const productWithId = {
          ...product,
          id: productId, // Make sure we have a consistent ID
          quantity: 1
        }
        toast.success(`Added ${product.name} to cart`)
        return [...currentCart, productWithId]
      }
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (!productId) {
      console.error("Invalid productId for updateQuantity:", productId)
      return
    }

    if (quantity <= 0) {
      return removeFromCart(productId)
    }

    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return []
      return prevCart.map((item) => {
        const itemId = item.id || item.model
        return itemId === productId ? { ...item, quantity } : item
      })
    })
  }

  const removeFromCart = (productId) => {
    if (!productId) {
      console.error("Invalid productId for removeFromCart:", productId)
      return
    }

    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return []

      const product = prevCart.find((item) => (item.id || item.model) === productId)
      if (product) {
        toast.info(`Removed ${product.name} from cart`)
      }
      return prevCart.filter((item) => (item.id || item.model) !== productId)
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
    toast.info("Cart has been cleared")
  }

  const calculateSubtotal = () => {
    if (!Array.isArray(cart)) return 0
    return cart.reduce((total, item) => {
      return total + (item.price || 0) * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    if (!Array.isArray(cart)) return 0
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  // Add a cartItems alias for compatibility
  const cartItems = cart

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems, // Adding this alias for compatibility
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        calculateSubtotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}