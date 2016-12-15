export default function reducer(state={
	cards: [],
	apiInfo: [],

	fetching_api_info: false,
	fetched_api_info: false,
	fetching_cards: false,
	fetched_cards: false,

	error: null,
}, action){
	switch(action.type){
		case "FETCHING_CARDS": {
			return { ...state, fetching_cards: true, }
		}
		case "FETCH_CARDS_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "CARD_SEARCH_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "CARD_SEARCH_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_SET_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_SET_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_CARDS_BY_CLASS_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_BY_CLASS_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_CARDS_BY_FACTION_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_BY_FACTION_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_CARDS_BY_QUALITY_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_BY_QUALITY_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_CARDS_BY_RACE_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_BY_RACE_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCH_CARDS_BY_TYPE_SUCCESSFUL": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: true,
				cards: action.payload,
			}
		}
		case "FETCH_CARDS_BY_TYPE_FAILED": {
			return {
				...state,
				fetching_cards: false,
				fetched_cards: false,
				error: action.payload,
			}
		}
		case "FETCHING_API_INFO": {
			return { ...state, fetching_api_info: true }
		}
		case "FETCHING_API_INFO_SUCCESSFUL": {
			return {
				...state,
				fetching_api_info: false,
				fetched_api_info: true,
				apiInfo: action.payload,
			}
		}
		case "FETCHING_API_INFO_FAILED": {
			return {
				...state,
				fetching_api_info: false,
				fetched_api_info: false,
				error: action.payload,
			}
		}
	}
	return state
}