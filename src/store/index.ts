/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:36:42
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-30 16:52:27
 */
import { createStore } from 'redux';
import reducers from './reducers.ts'

const store = createStore(reducers)

export default store