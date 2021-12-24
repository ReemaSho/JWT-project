const routeNotFound = (req, res) => {
    res.status(404).send("Route is not found");
};

export default routeNotFound;