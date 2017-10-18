
import './distribute_detail.css';
import React,{ Component } from 'react';
import HeaderTitle from '../../components/header_title/header_title';
import FormImage from '../../components/form_image/form_image';

export default class Distribute extends Component{
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
			healthSituation: '良好',
			audtionEffect: '良好',
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
		// 	console.log('citycode',data);
		// 	// this.setState({
		// 	// 	planManList: data,
		// 	// })
		// }).catch(err=>{
		// 	console.log(err);
		// })

		// this.setState({
		// 	menu: !this.state.menu
		// })
	}
	//处理备注框中多余的文字
	dealtextareaData(value) {
		if(value.length > 500){
			return value.substring(0,50);
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
	//点击派发按钮
	distributeEvent() {
		console.log('点击派发');
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
						<p className="border padding-left-right borderRadius4" onClick={()=>this.abolishConfirmEvent()}>确认</p>
					</div>
					<div className="center flex1">
						<p className="border padding-left-right borderRadius4" onClick={()=>this.abolishEvent()}>取消</p>
					</div>
				</div>
			</div>
		)
	}

	render(){
		//console.log(this.state.planManList);
		return (
			<div className="distribute">
				<HeaderTitle createMessage="创建信息" typeName="待派发" />
				<ul className="distribute_detail margin-bottom">
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
				<div className="distribute_message">
					<div className="selectPlanMan margin-bottom">
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
						<FormImage imgName="图片："/>
					</div>
					<div className="center border margin-top margin-bottom paddingUpDown borderRadius4"
					onClick={()=>{ this.distributeEvent()}}>
						派发
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