import { BaseURL } from "../Const";

/** @type object | null */
let GameIndex = null;

/** @type Promise<object></object> | null */
let GameIndexPromise = null;

let GetGameIndex = () => {
  if (GameIndex) {
    return Promise.resolve(GameIndex);
  } else if (!GameIndexPromise) {
    GameIndexPromise = (async () => {
      try {
        const response = await fetch(`${BaseURL}/games/index.json`);
        GameIndex = await response.json();

        return GameIndex;
      } catch {
        console.error(
          "Failed to retrieve game index! Supplying empty index and will " +
            "retry on next request for index."
        );

        GameIndexPromise = null;
        return [];
      }
    })();
  }

  return GameIndexPromise;
};

export default GetGameIndex;
