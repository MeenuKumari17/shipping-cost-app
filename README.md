# Shipping Cost App

This is a React-based application that calculates shipping costs for boxes sent from India to different countries. The app allows users to add box details and view a list of saved boxes.

## **Features**
- **Add Box Form:** Users can input receiver details, weight, color (RGB format), and destination country.
- **Box List View:** Displays the list of added boxes with calculated shipping costs.
- **Navigation:** A simple navbar to switch between the form and the list.
- **Validation:** Prevents negative weights and empty fields.
- **State Management:** Uses React state to store and display data.

## **Project Structure**

/shipping-cost-app │── /src │ ├── /components │ │ ├── Navbar.js │ │ ├── AddBox.js │ │ ├── BoxList.js │ ├── App.js │ ├── index.js │ ├── index.css │── /public │── package.json │── tailwind.config.js │── README.md


## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/shipping-cost-app.git

cd shipping-cost-app

npm install

npm start

```

The application will open at http://localhost:3000.

## Tech Stack

- Frontend: React.js, Tailwind CSS
- State Management: React Hooks (useState)
- Routing: React Router DOM

## How It Works

### Add Box View

- Fill in the receiver’s name, weight, color (RGB format), and select the destination.
- Click Save to store the data.
- A success message confirms that the data has been saved.

### Box List View

- Displays all added boxes with calculated shipping costs.
- The box color is shown as a visual color circle.
- Navigation

- Use the navbar to switch between Add Box and Box List.
- Environment Variables
- If needed, you can define API endpoints or environment-specific settings in a .env file.

### Best Practices Followed

- Component-based architecture for reusability.
- Error handling for form validation.
- CSS framework (Tailwind CSS) for a responsive UI.
- Clean and readable code using best practices.
