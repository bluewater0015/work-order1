//owner_order.js
import './owner_order.css';
import React,{ Component } from 'react';
import { CityPicker } from 'react-weui';
import 'weui';
import cnCity from './address';
//这是全局模拟假数据，后面要通过调用接口得到数据
let arr = [
			{
				id: 1001,
				machineCode: 'TQ000102001111',
				type: '维修',
				address: '北京万达影城（槐房店）2楼小吃店旁1',
				gread: '高1',
				status: '待执行',
				createTime: '2017.09.01 11:22',
				demand: '检查卫生情况总共展示15个字符1检查卫生情况总共展示15个字符1'
			},
			{
				id: 1002,
				machineCode: 'TQ000102002',
				type: '排查',
				address: '北京万达影城（槐房店）2楼小吃店旁2',
				gread: '高2',
				status: '待派发',
				createTime: '2017.09.02 12:56',
				demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符1'
			},
			{
				id: 1003,
				machineCode: 'TQ000102003',
				type: '维修',
				address: '北京万达影城（槐房店）2楼小吃店旁3',
				gread: '高3',
				status: '已撤销',
				createTime: '2017.09.03 12:56',
				demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符1'
			},
			{
				id: 1004,
				machineCode: 'TQ000102004',
				type: '维修',
				address: '北京万达影城（槐房店）2楼小吃店旁4',
				gread: '高4',
				status: '执行完成',
				createTime: '2017.09.03 12:56',
				demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符1'
			}
		]
export default class Owner extends Component{
	constructor(props){
		super(props);
		this.state = {
			typeName: '工单类型',
			typeNameList: [],
			statusName: '工单状态',
			city: '城市',
			type_show: false,
			status_show: false,
			array: '',
			contentList: [
				{
					id: 1001,
					machineCode: 'TQ000102001111',
					type: '维修',
					address: '北京万达影城（槐房店）2楼小吃店旁1',
					gread: '高1',
					status: '待执行',
					createTime: '2017.09.01 11:22',
					demand: '检查卫生情况总共展示15个字符1检查卫生情况总共展示15个字符1'

				},
				{
					id: 1002,
					machineCode: 'TQ000102002',
					type: '排查',
					address: '北京万达影城（槐房店）2楼小吃店旁2',
					gread: '高2',
					status: '待派发',
					createTime: '2017.09.02 12:56',
					demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符1'
				},
				{
					id: 1003,
					machineCode: 'TQ000102003',
					type: '维修',
					address: '北京万达影城（槐房店）2楼小吃店旁3',
					gread: '高3',
					status: '已撤销',
					createTime: '2017.09.03 12:56',
					demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符2'
				},
				{
					id: 1004,
					machineCode: 'TQ000102004',
					type: '维修',
					address: '北京万达影城（槐房店）2楼小吃店旁4',
					gread: '高4',
					status: '执行完成',
					createTime: '2017.09.03 12:56',
					demand: '检查卫生情况总共展示15个字符2检查卫生情况总共展示15个字符1'
				}
			]
		}
	}
	//设置工单类型的值
	setTypeNameList() {
		//如果是后台返回数据，需要请求数据，得到数据之后，再执行下面
		// let url = 'admin/owner';
		// return fetch(url,{
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-type': 'application/json'
		// 	},
		// 	mode: 'cors'
		// }).then(res=>{
		// 	return res.json()
		// }).then(data=>{
		// 	this.setSate({
		// 		//contentList: data,
		// 	})
		// }).catch(err=>{
		// 	console.log(err);
		// })
		this.setState({
			typeNameList: ['维修','排查']
		})
	}
	//设置工单状态的值
	setStatusNameList() {
		this.setState({
			statusNameList: ['待派发','待执行','执行完成','已撤销']
		})
	}
	componentDidMount() {
		//加载页面调用接口，加载数据
		this.completeListData();
		//设置工单类型的列表值
		this.setTypeNameList();
		//设置工单状态的列表值
		this.setStatusNameList();
	}
	//加载页面调用接口，加载数据
	completeListData() {
		var _this = this;
		let url = 'admin/citycode';
		return fetch(url,{
			method: 'GET',
			headers: {
				'Authorization':"Bearer "+localStorage.getItem('jwt_token'),
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			mode: 'cors'
		}).then(res=>{
			return res.json()
		}).then(data=>{
			// this.setstate({
			// 	//contentList: data,
			// })
		}).catch(err=>{
			console.log(err);
		})
		/*
		this.setState({
			contentList: arr,
			array: arr
		})
		*/
	}
	//点击工单类型
	typeClicEvent() {
		//console.log("工单类型");
		this.setState({
			type_show: !this.state.type_show,
			status_show: false
		})
	}
	//点击工单状态
	statusClickEvent() {
		//console.log("工单状态");
		this.setState({
			type_show: false,
			status_show :!this.state.status_show
		})
	}
	//点击城市
	cityClickEvent() {
		//console.log("城市");
		this.setState({
			type_show: false,
			status_show: false,
			city_show: true
		})
	}
	//撤销时
	cityCancelEvent() {
		this.setState({
			city_show: false
		})
	}
	//确定时,处理隐藏弹出框，城市显示处理后的内容
	//这里还有一个问题，是否能得到机器码，将城市码传给后台，后台返回城市码
	cityChangeEvent(text) {
		let textSplit = text.split(' ');
		let textCity = textSplit[1];
		console.log(textSplit);
		this.setState({
			city_show: false,
			city: textCity
		})
	}
	//点击工单类型中的每一项时，逻辑判断
	typeShowClickEvent(index){
		//维修和排查
		let typeName= this.state.typeNameList[index];
		//过滤
		let list = this.state.array.filter((item,index)=>{
			return item.type === typeName
		})
		this.setState({
			type_show: false,
			typeName: typeName,
			contentList: list
		})
	}
	//点击工单状态时，逻辑判断
	statusShowClickEvent(index) {
		//待派发、待执行、完成工单、已撤销
		let statusName = this.state.statusNameList[index];
		//过滤
		let list = this.state.array.filter((item,index)=>{
			return item.status ===  statusName
		})
		this.setState({
			status_show: false,
			statusName: statusName,
			contentList: list
		})
	}
	//点击城市时，逻辑判断
	//点击我的工单，列表显示所有内容
	myOrderClickEvent() {
		this.setState({
			contentList: arr
		})
	}
	//点击列表页面的每一项时，跳到对应的详情页面
	//一般我们传的都是id
	itemClicklEvent(index) {
		//console.log('跳转到列表详情页面');
		let id = this.state.contentList[index].id;
		//console.log('type',type);
		this.props.history.push(`/distribute_detail/${id}`);
	}
	render(){
		//console.log(this.state.contentList);
		return (
			<div className="owner">
				<div className="select">
					<ul className="select_list flex">
						<li className="select_item flex1 center border_right"
						onClick={ this.typeClicEvent.bind(this)}>
							{this.state.typeName}
						</li>
						{
							this.state.type_show ?
							<ul className="type_show">
								{
									this.state.typeNameList.map((item,index)=>{
										return (
											<li onClick={() => this.typeShowClickEvent(index)} 
											key={index}
											className="type_item center">
												{ item }
											</li>
										)
									})
								}			
							</ul> : ''
						}
						<li className="select_item flex1 center border_right"
						onClick={ this.statusClickEvent.bind(this)}>
							{this.state.statusName}
						</li>
						{
							this.state.status_show ? 
							<ul className="status_show">
								{
									this.state.statusNameList.map((item,index)=>{
										return (
											<li onClick={()=>{ this.statusShowClickEvent(index)}}
											key={index}
											className="status_item center">
												{item}
											</li>
										)
									})
								}
							</ul>
							:''
						}
						<li className="select_item flex2 center"
						onClick={ this.cityClickEvent.bind(this)}>
							{ this.state.city }
						</li>
						<CityPicker
                            data={cnCity}
                            onCancel={ this.cityCancelEvent.bind(this)}
                            onChange={ text=>this.cityChangeEvent(text)}
                            show={this.state.city_show}
                        />
					</ul>
				</div>
				<div className="content">
					{
						this.state.contentList.map((item,index)=>{
							return (
								<ul className="content_list margin-bottom border-bottom" 
								key={index}
								onClick={()=>{this.itemClicklEvent(index)}} >
									<li className="flex">
										<p>机器码：</p>
										<p className="flex1">{ item.machineCode} </p>
										<p className="flex-end">{ item.type }</p>
									</li>
									<li className="flex">
										<p>地址：</p>
										<p>{ item.address }</p>
									</li>
									<li className="flex">
										<p>级别：</p>
										<p>{ item.gread }</p>
										<p className="gread flex-end flex1">{ item.status }</p>
									</li>
									<li className="flex">
										<p>创建时间：</p>
										<p>{ item.createTime }</p>
									</li>
									<li className="flex">
										<p className="demand">需求：</p>
										<p className="ellipsis flex1">{ item.demand }</p>
									</li>
								</ul>
							)
						})
					}
				</div>
				<div className="myorder center" onClick={()=>{this.myOrderClickEvent()}}>
					我的工单
				</div>
			</div>
		)
	}
}