export const MapRelatedTypes = `#graphql
    type Company {
        companyId: ID
        name: String
    }

    type Bus {
        busId: ID
        lineId: ID
        serialNumber: String
        capacity: Int
        state: String
        latitude: Float
        longitude: Float
        isAccessibility: Boolean
    }

    type Line {
        lineId: ID
        companyId: ID
        departure: String
        arrival: String
        lineNumber: Int
        fareRange: String
        description: String
        rating: Float
    }

    type Stop {
        stopId: ID
        name: String
        state: StopState
        latitude: Float
        longitude: Float
        isAccessible: Boolean
        isOkForDisabled: Boolean
    }

    type LineStop {
        lineStopId: ID
        lineId: ID
        stopId: ID
        position: Int
        isFinal: Boolean
    }

    type Schedule {
        scheduleId: ID
        lineId: ID
        dayIndex: Int
        startTime: String
        endTime: String
        frequency: Int
        averageTravelDuration: Float
    }

    enum StopState {
        CROWDED
        NORMAL
        EMPTY
    }

    type Place {
        address: String
        latitude: Float
        longitude: Float
    }

    type Stop {
        address: String
        latitude: Float
        longitude: Float
        name: String
        isOkForDisabled: Boolean
        lines: [Line!]
    }

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
