export const typeDefs = `#graphql
    type Query {
        # Companies Query
        companies: [Company!]
        company(companyName: String!): Company

        # Buses Query
        buses: [Bus!]
        bus(busId: ID!): Bus

        # Lines Query
        lines: [Line!]
        linesByCompany(companyId: ID!): [Line!]

        # LineStops Query
        #lineStops: [LineStop!]

        # Schedules Query
        schedules: [Schedule!]
        schedulesByLine(lineId: ID!): [Schedule!]

        # Stops Query
        stops: [Stop!]
        stop(stopId: ID!): Stop
    },

    type Mutation {
        # Companies Mutation
        createCompany(company: CompanyInput!): Company
        updateCompany(companyId: ID!, company: CompanyInput!): Company
        deleteCompany(companyId: ID!): Company

        # Buses Mutation
        createBus(bus: BusInput!): Bus
        updateBus(busId: ID!, bus: BusInput!): Bus
        deleteBus(busId: ID!): Bus

        # Lines Mutation
        createLine(line: LineInput!): Line
        updateLine(lineId: ID!, line: LineInput!): Line
        deleteLine(lineId: ID!): Line
        
        # LineStops Mutation
        #createLineStop(lineStop: LineStopInput!): LineStop!
        #updateLineStop(lineStopId: ID!, lineStop: LineStopInput!): LineStop!
        #deleteLineStop(lineStopId: ID!): LineStop!

        # Schedules Mutation
        createSchedule(schedule: ScheduleInput!): Schedule
        updateSchedule(scheduleId: ID!, schedule: ScheduleInput!): Schedule
        deleteSchedule(scheduleId: ID!): Schedule

        # Stops Mutation
        createStop(stop: StopInput!): Stop
        updateStop(stopId: ID!, stop: StopInput!): Stop
        deleteStop(stopId: ID!): Stop
    },

    input CompanyInput {
        name: String!
    }

    input BusInput {
        lineId: ID!
        serialNumber: String!
        capacity: Int
        state: String
        latitude: Float
        longitude: Float
        isAccessibility: Boolean
    }

    input LineInput {
        companyId: ID!
        departure: String
        arrival: String
        lineNumber: Int!
        fareRange: String
        description: String
        rating: Float
    }

    input ScheduleInput {
        lineId: ID!
        dayIndex: Int!
        startTime: String!
        endTime: String!
        frequency: Int!
        averageTravelDuration: Float!
    }

    input StopInput {
        name: String!
        # state: StopState!
        latitude: Float!
        longitude: Float!
        isAccessible: Boolean!
        isOkForDisabled: Boolean
    }

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

    type Stop {
        stopId: ID
        name: String
        # state: StopState!
        latitude: Float
        longitude: Float
        isAccessible: Boolean
        isOkForDisabled: Boolean
    }

    # type StopState {
    #     stopState: String!
    # }

`;
