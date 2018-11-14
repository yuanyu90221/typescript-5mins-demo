// import {Moment} from 'moment';
import {testYield} from './yieldfunction';
// import {Promise} from 'es6-promise';
const NEXTQUEUE = [];
const PROCQUEUE = [];
let currentSessionID = 0;
interface TaskObj{
  task: any,
  sessionID: number
};
interface ReadyTask{
  handler: any,
  sessionID: number
};
const addTask = async (taskIn) => {
  let currentUnDo = NEXTQUEUE.shift();
  // console.log(taskIn);
  NEXTQUEUE.unshift(taskIn);
  return await tryHook();  
};
// setInterval(()=>{tryHook();}, 1000)
const tryHook = async () => {
  console.log(`PROCQUEUE : ${PROCQUEUE.length}`);
  console.log(`NEXTQUEUE : ${PROCQUEUE.length}`);
  let previousTask = PROCQUEUE.shift();
  let nextUndo = NEXTQUEUE.shift();
  console.log(`previousTask`, previousTask);
  // console.log(`nextUndo`, nextUndo);
  let { handler } = nextUndo;
  let willDoHdr = testYield(handler);
 
  if (previousTask) {
    let { task, sessionID } = previousTask;
    console.log(task.value);
    if (!task.isPending && nextUndo) {
      if (nextUndo) {
        throw "DROP ERROR";
      } else {
        return task.value;
      }
    }
    else {
      console.log(previousTask);
      PROCQUEUE.unshift(previousTask);
      NEXTQUEUE.unshift(nextUndo);
    }
  } else {
    let promise = willDoHdr.next();
    PROCQUEUE.unshift({task: promise, sessionID: nextUndo.sessionID});
  }
};

// function* testYield(handler) {
//   return yield handler();
// }
export {tryHook, addTask};