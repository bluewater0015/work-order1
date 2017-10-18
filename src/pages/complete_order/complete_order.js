
import './complete_order.css';

import React,{ Component } from 'react';
import HeaderTitle from '../../components/header_title/header_title';
import FormImage from '../../components/form_image/form_image';

export default class Complete extends Component{
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
			remark: '我没时间做，让他去做',
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
	render(){

		return (
			<div className="complete">
				<HeaderTitle createMessage="创建信息" />
				<ul className="complete_detail margin-bottom">
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
				<div className="complete_message margin-bottom">
					<div className="flex margin-bottom">
						<p>派发人：</p>
						<p>{ this.state.distributeMan }</p>
					</div>
					<div className="flex margin-bottom">
						<p>计划执行人：</p>
						<p>{ this.state.planExecuteMan}</p>
					</div>
					<div className="flex margin-bottom">
						<p>派发时间：</p>
						<p>{ this.state.taskTime }</p>
					</div>
					<div className="flex margin-bottom">
						<p>备注：</p>
						<p>{ this.state.remark }</p>
					</div>
					<div className="margin-bottom">
						<p>图片：</p>
					</div>
				</div>
				<HeaderTitle createMessage="执行信息" />
				<div className="padding">
					<div className="flex margin-bottom">
						<p>实际执行人</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>接单时间：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>完成时间：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>执行结果：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>试唱效果：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>垃圾桶摆放：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>路由器天线：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>贴纸：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>竞品：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>定时器：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>定时器开关时间：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>设备图片：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>卫生图片：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>竞品价格图片：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>撤销人：</p>
						<p></p>
					</div>
					<div className="flex margin-bottom">
						<p>撤销时间：</p>
						<p></p>
					</div>
				</div>
			</div>
		)
	}
}