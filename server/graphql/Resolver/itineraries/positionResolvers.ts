export const positionResolvers = {
  Position: {
    __resolveType(obj, contextValue, info) {

      if (obj.longitude && obj.latitude) {

        if (obj.okForDisabled != null){ 
			return "Stop";
		}
        else 
			return "Place";
      }

      return null;
    },
  },
};
