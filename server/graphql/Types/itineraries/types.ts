export const itinerariesTypes = `#graphql
	type Place {
        name: String
        latitude: Float
        longitude: Float
    }

    #type Stop {
    #    address: String
    #    latitude: Float
    #    longitude: Float
    #    name: String
    #    isOkForDisabled: Boolean
    #    lines: [Line!]
    #}

    union Position = Place | Stop

    type RouteSection {
        distance: Float
        duration: Float
        polyline: String
        routeSectionType: RouteSectionType
        origin: Position
        destination: Position
    }

    type Route {
        sections: [RouteSection!]
    }

    type Itinerary {
        origin: Position
        destination: Position
        route: Route
    }

    enum RouteSectionType {
        PEDESTRIAN
        TRANSIT
    }
`;