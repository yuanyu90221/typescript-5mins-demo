import moment from 'moment';
import Promise from 'es6-promise';
const NEXTQUEUE = [];
const PROCQUEUE = [];
let currentSessionID = 0;
interface TaskObj{
  task: Promise<any>,
  sessionID: number
};
interface ReadyTask{
  handler: any,
  sessionID: number
};
const addTask = async (taskIn:ReadyTask) => {
  let currentUnDo = NEXTQUEUE.shift();
  NEXTQUEUE.unshift(taskIn);
  tryHook();  
};
const tryHook = async ()=>{
  let previousTask = PROCQUEUE.shift();
  let nextUndo = NEXTQUEUE.shift();
  let { task, sessionID } = previousTask;
  let { handler } = nextUndo;
  let willDoHdr = testYield(handler);
  while(task.isPending == false) {
    let promise = willDoHdr.next();
    NEXTQUEUE.unshift({task: promise, sessionID: nextUndo.sessionID});
  }
};

function* testYield(handler) {
  return yield handler();
}
export {tryHook, addTask};