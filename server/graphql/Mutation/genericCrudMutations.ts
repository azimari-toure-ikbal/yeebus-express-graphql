export const GenericCrudMutations = `#graphql
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

        # Stops Mutation
        createStop(stop: StopInput!): Stop
        updateStop(stopId: ID!, stop: StopInput!): Stop
        deleteStop(stopId: ID!): Stop
        
        # LineStops Mutation
        #createLineStop(lineStop: LineStopInput!): LineStop!
        #updateLineStop(lineStopId: ID!, lineStop: LineStopInput!): LineStop!
        #deleteLineStop(lineStopId: ID!): LineStop!

        # Schedules Mutation
        createSchedule(schedule: ScheduleInput!): Schedule
        updateSchedule(scheduleId: ID!, schedule: ScheduleInput!): Schedule
        deleteSchedule(scheduleId: ID!): Schedule
    },
    
`;
