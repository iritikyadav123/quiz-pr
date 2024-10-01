import { atom } from "recoil";


export let questionAtom = atom({
     key : "questionAtom",
     default : [{
        key: 1,
        ques : "",
        opt : [],
        ans : 0
     },{
      key: 2,
      ques : "",
      opt : [],
      ans : 0
   }]
})