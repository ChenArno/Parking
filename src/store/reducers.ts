/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:37:16
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-03 11:15:06
 */
import { auth } from './redux/login.ts'
import { queryEvent } from './redux/formData.ts'
import { combineReducers } from 'redux'

export default combineReducers({ auth, queryEvent })