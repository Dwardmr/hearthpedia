import axios from 'axios';

export function getCards(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards?";
	if(params.attack){
		url += "&attack=" + params.attack;
	} else if(params.collectible){
		url += "&collectible=" + params.collectible;
	} else if(params.cost){
		url += "&cost=" + params.cost;
	} else if(params.durability){
		url += "&durability=" + params.durability;
	} else if(params.health){
		url += "&health=" + params.health;
	} else if(params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: { "X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj" })
			dispatch({type: "FETCHING_CARDS"})
				.then((response) =>{
					dispatch({type: "FETCH_CARDS_SUCCESSFUL", payload: response.data})
				})
				.catch((err) =>{
					dispatch({type:"FETCH_CARDS_FAILED", payload: err})
				})
	}
}
export function searchCard(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" + params.name + "?";
	if(params.collectible){
		url += "&collectible=1";
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url)
			dispatch("SEARCHING_CARD", headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			.then((response) => {
				dispatch({type: "CARD_SEARCH_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "CARD_SEARCH_FAILED", payload: err})
			})
	}
}
export function getSet(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/" + params.set + "?";
	if(params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=" + params.collectible;
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health; 
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_SET_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_SET_FAILED", payload: err})
			})
	}
}
export function getCardsByClass(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + params.class + "?";
	if (params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=1";
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health;
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_CARDS_BY_CLASS_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_CARDS_BY_CLASS_FAILED", payload: err})
			})
	}
}
export function getCardsByFaction(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/factions/" + params.faction + "?";
	if (params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=1";
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health;
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_CARDS_BY_FACTION_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_CARDS_BY_FACTION_FAILED", payload: err})
			})
	}
}
export function getCardsByQuality(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/" + params.quality + "?";
	if (params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=1";
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health;
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_CARDS_BY_QUALITY_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_CARDS_BY_QUALITY_FAILED", payload: err})
			})
	}
}
export function getCardsByRace(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/races/" + params.race + "?";
	if (params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=1";
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health;
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_CARDS_BY_RACE_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_CARDS_BYRACE_FAILED", payload: err})
			})
	}
}
export function getCardsByType(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/" + params.type + "?";
	if (params.attack){
		url += "&attack=" + params.attack;
	} else if (params.collectible){
		url += "&collectible=1";
	} else if (params.cost){
		url += "&cost=" + params.cost;
	} else if (params.durability){
		url += "&durability=" + params.durability;
	} else if (params.health){
		url += "&health=" + params.health;
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url, headers: {"X-Mashape-Key", "CVdb6yGlxjmshsyPyyYGCoSu9znjp1rwZ0ijsnhwkJlToWFWrj"})
			dispatch({type: "FETCHING_CARDS"})
			.then((response) => {
				dispatch({type: "FETCH_CARDS_BY_TYPE_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_CARDS_BY_TYPE_FAILED", payload: err})
			})
	}
}
export function getApiInfo(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/info?";
	if(params.locale){
		url += "&locale=" + params.locale;
	}
	return function(dispatch){
		axios.get(url)
			dispatch({type: "FETCHING_API_INFO"})
			.then((response) => {
				dispatch({type: "FETCH_API_INFO_SUCCESSFUL", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_API_INFO_FAILED", payload: err})
			})
	}
}
export function getSingleCard(params){
	let url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + params.name + "?";
	if (params.collectible){
		url += "&collectible=1";
	} else if (params.locale){
		url += "&locale=" + params.locale;
	}
}