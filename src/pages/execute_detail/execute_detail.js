
import './execute_detail.css';
import React,{ Component } from 'react';
import HeaderTitle from '../../components/header_title/header_title';
import FormImage from '../../components/form_image/form_image';

export default class Execute extends Component{
	constructor(props){
		super(props);
		this.state ={
			machineCode: 'YT000001897',
			location: '北京万达（槐房店）',
			address: '北京万达（槐房店）3层',
			gread: '高1',
			city: '北京',
			type: '维修工单',
			demand: '检查卫生情况总共展示15个字符1检查卫生情况总共展示15个字符1',
			complete_time: '2017.09.10 12：20',
			vedio: 'www..askjfalda.com',
			founder: '小小',
			createTime: '2017.09.10 12：20',

			confirmModel: false,
			cancelModel: false,
			shade: false,
			menu: false,

			//备注
			remark: '',
			resultDescribe: '',
			situationRemark: '',
			//卫生
			healthSituation: '',
			//试唱效果
			audtionEffect: '',
			//定时时间
			timerTime: '',
			picture: [
				{
					src: 'www.baidu.com'
				}
			],
			distributeMan: '天下',
			planExecuteMan: '美丽',
			planManList: ['章三','里斯','笑话','天下第一','里斯','笑话','天下第一','里斯','笑话','天下第一','里斯','笑话','天下第一'],
			distributeTime: '2017.12.2',
			practiceMan: '王尼玛',
			taskTime: '2016.06.10',
			executeResult: '完成排查',
			executeResultDes: '一切都做好，请领导放心。',
			dustbinPut: '已摆放',
			routerAntenna: '已除去',
			paster: '已更换',
			competitor: '无',
			timer: '未安装',
		}
	}
	fetchData(){
		this.setState({

		})
	}
	componentDidMount() {
		this.fetchData();
	}
	//点击计划执行人的下拉菜单
	downMenuEvent() {
		//从后台拿数据
		// let url = '/admin/admin-workOrder';
		// return fetch(url,{
		// 	method: 'GET',
		// 	headers: {
		// 		'Authorization':"Bearer "+localStorage.getItem('jwt_token'),
		// 		'Accept': 'application/json',
		// 		'Content-type': 'application/json'
		// 	},
		// 	mode: 'cors'
		// }).then(res=>{
		// 	return res.json()
		// }).then(data=>{
		// 	//console.log('citycode',data);
		// 	this.setState({
		// 		planManList: data,
		// 	})
		// }).catch(err=>{
		// 	console.log(err);
		// })

		this.setState({
			menu: !this.state.menu
		})
	}
	//处理备注框中多余的文字,超过500字之后截取
	dealtextareaData(value) {
		if(value.length > 500){
			return value.substring(0,500);
		}
		return value;
	}
	//处理input框中多余的文字，超过100字之后截取
	dealtextareaData1(value) {
		if(value.length > 100){
			return value.substring(0,100);
		}
		return value;
	}
	//备注框输入文字时，获取值
	remarkChangeEvent(e) {
		//console.log('备注');
		//console.log(this.state.remark);
		let value = e.target.value;
		console.log(value.length);
		this.setState({
			remark: this.dealtextareaData(value)
		})
	}
	//执行结果描述
	resultDescribeEvent(e) {
		console.log('执行结果描述：');
		let value = e.target.value;
		this.setState({
			resultDescribe: this.dealtextareaData(value)
		})
	}
	//后续情况备注
	situationRemarkEvent(e) {
		console.log('后续情况备注');
		let value = e.target.value;
		this.setState({
			situationRemark: this.dealtextareaData(value)
		})
	}
	//卫生情况
	healthSituationEvent(e) {
		console.log('卫生情况');
		let value = e.target.value;
		this.setState({
			healthSituation: this.dealtextareaData1(value)
		})
	}
	//试唱效果
	audtionEffectEvent(e) {
		let value = e.target.value;
		this.setState({
			audtionEffect: this.dealtextareaData1(value)
		})
	}
	//定时器时间
	timerTimeEvent(e) {
		let value = e.target.value;
		this.setState({
			timerTime: this.dealtextareaData1(value)
		})
	}
	//点击派发按钮
	transmitEvent() {
		console.log('转发工单');
		//let id = 1;
		this.setState({
			shade: true,
			confirmModel: true,
			cancelModel: false
		})
	}
	//确认时的确认按钮
	confirmEvent() {
		this.setState({
			shade: false,
			confirmModel: false
		})
	}
	//确认时的取消按钮
	confirmCancelEvent() {
		this.setState({
			shade: false,
			confirmModel: false
		})
	}
	//点击撤销按钮
	cancelEvent() {
		console.log('点击撤销');
		this.setState({
			shade: true,
			cancelModel: true,
			confirmModel: false
		})
	}
	//撤销时的确认按钮
	abolishConfirmEvent() {
		this.setState({
			shade: false,
			confirmModel: false,
			cancelModel: false,
		})
	}
	//撤销时的取消按钮
	abolishEvent() {
		this.setState({
			shade: false,
			confirmModel: false,
			cancelModel: false,
		})
	}
	//完成工单
	completeEvent() {
		console.log('完成工单');
	}
	//展示遮罩层
	shadeShowModel() {
		return (
			<div className="shade">
			</div>
		)
	}
	//确认时的弹出框
	confirmShowModel(){
		return(
			<div className="confirmModel">
				<div className="center">
					工单将派发给
					<p>{ this.state.distributeMan }</p>
				</div>
				<div className="center margin-bottom30">
					是否确认？
				</div>
				<div className="flex">
					<div className="center flex1" onClick={()=>this.confirmEvent()}>
						<p className="border padding-left-right borderRadius4">确认</p>
					</div>
					<div className="center flex1" onClick={()=>this.confirmCancelEvent()}>
						<p className="border padding-left-right borderRadius4">取消</p>
					</div>
				</div>
			</div>
		)
	}
	//撤销时的弹出框
	cancelShowModel() {
		return(
			<div className="cancelModel">
				<div className="center">
					撤销后，无法恢复
				</div>
				<div className="center margin-bottom30">
					是否确认撤销？
				</div>
				<div className="flex">
					<div className="center flex1">
						<p className="border padding-left-right borderRadius4"
						onClick={()=>this.abolishConfirmEvent()}>
							确认
						</p>
					</div>
					<div className="center flex1">
						<p className="border padding-left-right borderRadius4"
						onClick={()=>this.abolishEvent()}>
							取消
						</p>
					</div>
				</div>
			</div>
		)
	}

	render(){
		return (
			<div className="execute">
				<HeaderTitle createMessage="创建信息" typeName="待派发" />
				<ul className="execute_detail margin-bottom">
					<li className="flex">
						<p className="machine_code">机器码：</p>
						<p>{ this.state.machineCode} </p>
					</li>
					<li className="flex">
						<p>点位：</p>
						<p>{this.state.location}</p>
					</li>
					<li className="flex">
						<p>地址：</p>
						<p>{ this.state.address }</p>
					</li>
					<li className="flex">
						<p>城市：</p>
						<p>{ this.state.city }</p>
					</li>
					<li className="flex">
						<p>类型：</p>
						<p>{ this.state.type }</p>
					</li>
					<li className="flex">
						<p className="demand">需求：</p>
						<p className="ellipsis flex1">{ this.state.demand }</p>
					</li>
					<li className="flex">
						<p>期望完成时间：</p>
						<p>{ this.state.complete_time }</p>
					</li>
					<li className="flex">
						<p>视频：</p>
						<p>{ this.state.vedio }</p>
					</li>
					<li className="flex">
						<p>创建人：</p>
						<p>{ this.state.founder}</p>
					</li>
				</ul>
				<HeaderTitle createMessage="派发信息" />
				<div className="execute_message">
					<div className="selectPlanMan margin-bottom">
						<div className="flex">
							<p>派发人：</p>
							<p>{ this.state.distributeMan }</p>
						</div>
						<div className="flex">
							<p>派发时间：</p>
							<p>{ this.state.taskTime }</p>
						</div>
						<div className="flex">
							<p>*</p>
							<p>计划执行人：</p>
							<p onClick={()=>{this.downMenuEvent()}}>
								下箭头
							</p>
						</div>
						<div className="menuShow">
							{
								this.state.menu ? 
								<ul className="menu_list">
									{
										this.state.planManList.map((item,index)=>{
											return (
												<li key={index} className="menu_item center">
													{item}
												</li>
											)
										})
									}
								</ul>:''
							}
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>备注：</p>
						<textarea className="remark_describe flex1"
						onChange={(e)=>{this.remarkChangeEvent(e)}}
						value={ this.state.remark }>	
						</textarea>
					</div>
					<div className="margin-bottom">
						<FormImage />
					</div>
				</div>
				<HeaderTitle createMessage="执行信息" />
				<div className="padding">
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">执行结果:</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>完成排查、维修且故障修复</option>
								<option>完成排查、维修单但故障未修复</option>
								<option>未完成排查、维修</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">执行结果描述：</p>
						<textarea className="flex1 border textareaHeight"
						value={this.state.resultDescribe}
						onChange={(e)=>{this.resultDescribeEvent(e)}}>
						</textarea>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">后续情况备注：</p>
						<textarea className="flex1 border textareaHeight"
						value={this.state.situationRemark}
						onChange={(e)=>this.situationRemarkEvent(e)}>
						</textarea>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">卫生情况：</p>
						<div className="flex1 center">
							<input className="inputHeight" type="text" placeholder="请输入卫生情况"
							value={ this.state.healthSituation}
							onChange={(e)=>this.healthSituationEvent(e)} />
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">场地定时打扫：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">垃圾桶摆放：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">禁烟贴纸：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">试唱效果：</p>
						<div className="flex1 center">
							<input className="inputHeight" type="text"
							value={this.state.audtionEffect}
							placeholder="耳机、话筒、音箱、灯光是否正常"
							onChange={(e)=>this.audtionEffectEvent(e)}/>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">耳机话筒线固定：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">门和闭门器下沉漏油损坏：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">脚杯底座固定调平：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">空调工作模式：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>制冷</option>
								<option>排风</option>
								<option>关闭</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">玻璃门贴纸更换：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">定时器安装：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p className="color_white">*</p>
						<p className="pWidth">定时器开关时间：</p>
						<div className="flex1 center">
							<input className="inputHeight" type="text"
							value={this.state.timerTime}
							placeholder="若安装定时器，请填写开关机时间"
							onChange={(e)=>this.timerTimeEvent(e)}/>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">摄像头安装：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">补光灯是否可用(双屏机必填)：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">手机充电口是否可用(双屏机必填)：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">外接耳机口是否可用(双屏机必填)：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>是</option>
								<option>否</option>
							</select>
						</div>
					</div>
					<div className="flex margin-bottom">
						<p>*</p>
						<p className="pWidth">是否有竞品：</p>
						<div className="flex1 center">
							<select className="selectActive">
								<option>请选择</option>
								<option>已除去</option>
								<option>未除去</option>
							</select>
						</div>
					</div>
					<div className="flex">
						<p>*</p>
						<FormImage imgName="设备图片："/>
					</div>
					<div className="flex">
						<p className="color_white">*</p>
						<FormImage imgName="卫生图片："/>
					</div>
					<div className="flex">
						<p className="color_white">*</p>
						<FormImage imgName="竞品价格图片(有竞品则必须上传)："/>
					</div>
				</div>

				<div className="padding">
					<div className="center border margin-top margin-bottom paddingUpDown borderRadius4"
					onClick={()=>{ this.transmitEvent()}}>
						转发工单
					</div>
					<div className="center border margin-top margin-bottom paddingUpDown borderRadius4"
					onClick={()=>{ this.completeEvent() }}>
						完成工单
					</div>
					<div className="center border margin-top margin-bottom paddingUpDown borderRadius4"
					onClick={()=>{ this.cancelEvent()}}>
						撤销
					</div>
				</div>
				{
					this.state.shade ? this.shadeShowModel():null
				}
				{
					this.state.confirmModel? this.confirmShowModel():null
				}
				{
					this.state.cancelModel? this.cancelShowModel():null
				}

			</div>
		)
	}
}