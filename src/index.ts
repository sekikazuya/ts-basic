// import World from "./world";

// const root = document.getElementById("root")
// const world = new World("Hello World!");
// world.sayHello(root)

// 03.基本の型定義
// import { unknownSample, anySample, notExistSample, primitiveSample } from "./basic";

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

//04.関数の型定義
import { logMessage } from "./function/basic";
import {isUserSignedIn, isUserSignedIn2} from "./function/parameters";

logMessage("Hello TypeScript!")
isUserSignedIn( "ABC", "TypeScript")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")