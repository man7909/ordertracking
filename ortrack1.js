function Tracking(status) {
    if (status === "Pending") {
        return "Your order is pending.";
    } else if (status === "Processing") {
        return "Your order is being processed.";
    } else if (status === "Shipped") {
        return "Your order has been shipped.";
    } else if (status === "Delivered") {
        return "Your order has been delivered.";
    } else {
        return "Your order status is invalid.";
    }
}

module.exports = Tracking;