
export const positionResolvers = {
	Position: {
		__resolveType(obj: any, contextValue: any, info: any) {
			if (obj.longitude && obj.latitude){
				if (obj.name)
					return "Stop";
				else
					return "Place";
			}
				
			return null;
		}
	}
}