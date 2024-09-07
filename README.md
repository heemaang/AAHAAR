**AAHAAR - Connecting People with NGOs and Food Banks**
=======================================================

**AAHAAR** is a web portal built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to help people connect with NGOs and food banks easily. The platform eliminates barriers like procrastination and connects users directly to NGOs, ensuring that the resources are delivered to those in need. Users can donate food, money, or other items, and NGOs can register to receive them. GPS tracking and integration with third-party services such as Uber, Ola, Zomato, or Swiggy allow seamless logistics for donations.

**Motivation**
--------------

In many cases, people want to donate to NGOs and food banks but don’t have the time or motivation to deliver the items themselves. **AAHAAR** bridges this gap by allowing users to notify NGOs directly or use third-party services to deliver items. This platform encourages timely donations and provides a way for people to contribute meaningfully to society.

**Features**
------------

*   **NGO and Food Bank Registration**: NGOs and food banks can register and manage their accounts on the platform.
    
*   **User Donations**: Users can donate food, money, or other essential items.
    
*   **Notifications**: Automatic notifications to NGOs when donations are made.
    
*   **Payment Gateway Integration**: Users can donate money directly through the platform via secure payment gateways.
    
*   **Food Photo Upload**: Users can upload images of food items they wish to donate along with necessary details.
    
*   **GPS Location Tracking**: Users’ locations are tracked to assist NGOs and third-party services in locating them.
    
*   **Third-Party Integration**: Services like **Uber**, **Ola**, **Zomato**, or **Swiggy** can be connected to help deliver the donated items.
    
*   **Responsive Design**: The platform is optimized for both desktop and mobile devices.
    

**Tech Stack**
--------------

*   **Frontend**: React.js, Tailwind CSS/Bootstrap
    
*   **Backend**: Node.js, Express.js
    
*   **Database**: MongoDB
    
*   **Authentication**: JWT-based authentication for secure login and user management.
    
*   **Payment Gateway**: Stripe or Razorpay for secure monetary donations.
    
*   **GPS Tracking**: HTML5 Geolocation API or Google Maps API.
    
*   **Real-time Notifications**: Socket.IO for real-time notifications.
    
*   **Third-Party Integration**: APIs for Uber, Ola, Zomato, or Swiggy.
    

**Installation**
----------------

### **Prerequisites**

*   **Node.js** (v14.x or later)
    
*   **MongoDB** (local or Atlas)
    
*   **NPM** or **Yarn**
    

### **Steps:**

**1\. Clone the repository**:

 `clone https://github.com/your-username/aahaar.git  cd aahaar`

**2\. Install dependencies**:

**Backend**:

`   cd backend  npm install   `

**Frontend**:

`   bashCopy codecd frontend  npm install   `

**3\. Set up environment variables** in the backend .env file:

`   MONGO_URI=  JWT_SECRET=  STRIPE_SECRET=  GOOGLE_MAPS_API_KEY=   `

**4.Run the servers**:

**Backend**:

`   nodemon server.js/node server.js   `

**Frontend**:

`npm start`

**Usage**

*   **User Registration**: Users can register to donate food or other items.
    
*   **NGO Registration**: NGOs and food banks can create accounts and get notifications when donations are made.
    
*   **Upload Food Photos**: Users can upload images of the food along with details such as type, quantity, and pickup location.
    
*   **GPS Tracking**: The location of the user is captured, so NGOs or third-party services can locate them easily.
    
*   **Third-Party Integration**: Uber, Ola, Zomato, or Swiggy can be called in as intermediaries to deliver the donated items.
    

**Third-Party Integration**
---------------------------

AAHAAR seamlessly integrates with third-party services like **Uber**, **Ola**, **Zomato**, and **Swiggy** to assist with the collection and distribution of donations. NGOs or donors can call for these services to pick up and deliver food or items.

*   **Uber/Ola API**: To transport items from the donor’s location to the NGO or food bank.
    
*   **Zomato/Swiggy API**: For food-related donations that require fast delivery.
    

**Report Issues**
-----------------

If you encounter any problems or have suggestions, feel free to [create an issue](https://github.com/heemaang/AAHAAR.git) on this repository.

*   **GitHub Issues**: [Report here](https://github.com/heemaang/AAHAAR.git)
    

**Contact**
-----------

For any questions or suggestions, please reach out to me:

*   **GitHub**: [@heemaang](https://github.com/heemaang)
    
*   **Email**: heemaang.saxena18@gmail.com
