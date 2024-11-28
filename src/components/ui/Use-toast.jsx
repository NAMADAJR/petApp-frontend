import * as React from "react"
import { cn } from "../lib/Utils"

const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(({ title, description, variant = "default" }) => {
    setToasts((prevToasts) => [...prevToasts, { id: Date.now(), title, description, variant }])
  }, [])

  const removeToast = React.useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm p-4 md:max-w-md">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

const Toast = React.forwardRef(({ className, variant, title, description, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mb-2 w-full rounded-lg border p-4 shadow-md",
        {
          "bg-background text-foreground": variant === "default",
          "bg-destructive text-destructive-foreground": variant === "destructive",
        },
        className
      )}
      {...props}
    >
      <div className="flex justify-between">
        <div>
          {title && <h5 className="mb-1 font-medium">{title}</h5>}
          {description && <p className="text-sm">{description}</p>}
        </div>
        <button onClick={onClose} className="text-sm font-medium">
          ×
        </button>
      </div>
    </div>
  )
})
Toast.displayName = "Toast"

export { Toast }

