//Json Object
var data = [
	{
		time: '1984-12-24',
		body: [{
			tag: 'h6',
			content: "1984.12.24"
		},
		{
			tag: 'p',
			content: '國貿大樓開工動土典禮'
		}]
	},
	{
		time: '1985-01-05',
		body: [{
			tag: 'h6',
			content: "1985.01.05"
		},
		{
			tag: 'p',
			content: '本公司第一次股東會暨第一屆第一次董監事聯席會議，推選張光世先生為董事長'
		}]
	},
	{
		time: '1986-04-15',
		body: [{
			tag: 'h6',
			content: "1986.04.15"
		},
		{
			tag: 'p',
			content: '簽訂「國際貿易大樓開發經營計畫契約書」與「國際貿易大樓設定地上權契約書」'
		}]
	},
	{
		time: '1987-03-24',
		body: [{
			tag: 'h6',
			content: "1987.03.24"
		},
		{
			tag: 'p',
			content: '台北世貿中心國貿大樓上樑典禮'
		}]
	},
	{
		time: '1987-03-28',
		body: [{
			tag: 'h6',
			content: "1987.03.28"
		},
		{
			tag: 'p',
			content: '本公司第六次股東會暨第二屆第一次董事會，張世光先生連任為董事長'
		}]
	},
	{
		time: '1988-04-17',
		body: [{
			tag: 'h6',
			content: "1988.04.17"
		},
		{
			tag: 'p',
			content: '第一家租戶「明導資訊股份有限公司」進住'
		}]
	},
	{
		time: '1988-07-01',
		body: [{
			tag: 'h6',
			content: "1988.07.01"
		},
		{
			tag: 'p',
			content: '國貿大樓正式啟用，租戶陸續遷入'
		}]
	},
	{
		time: '1989-11-09',
		body: [{
			tag: 'h6',
			content: "1989.11.09"
		},
		{
			tag: 'p',
			content: '台北世界貿易中心聯誼社理事會舉行成立會議，陸潤康先生擔任理事主席'
		}]
	},
	{
		time: '1990-10-15',
		body: [{
			tag: 'h6',
			content: "1990.10.15"
		},
		{
			tag: 'p',
			content: '汪錕先生當選為董事長'
		}]
	},
	{
		time: '1990-11-01',
		body: [{
			tag: 'h6',
			content: "1990.11.01"
		},
		{
			tag: 'p',
			content: '台北世貿中心聯誼社正式開幕'
		}]
	},
	{
		time: '1993-03-13',
		body: [{
			tag: 'h6',
			content: "1993.03.13"
		},
		{
			tag: 'p',
			content: '于建民先生於三屆第十五次董事會推選為本公司董事長'
		}]
	},
	{
		time: '1995-10-30',
		body: [{
			tag: 'h6',
			content: "1995.10.30"
		},
		{
			tag: 'p',
			content: '第四屆第九次董事會通過，世貿聯誼社由委外經營變更收回由國貿公司獨立經營，並調整組織結構'
		}]
	},
	{
		time: '1999-08-31',
		body: [{
			tag: 'h6',
			content: "1999.08.31"
		},
		{
			tag: 'p',
			content: '本公司與貿協結束合作關係，由本公司獨立經營聯誼社'
		}]
	},
	{
		time: '1999-12-23',
		body: [{
			tag: 'h6',
			content: "1999.12.23"
		},
		{
			tag: 'p',
			content: '六屆第一次董事會通過推選謝金汀先生為本公司第六屆董事長'
		}]
	},
	{
		time: '2000-01-13',
		body: [{
			tag: 'h6',
			content: "2000.01.13"
		},
		{
			tag: 'p',
			content: '第六屆第二次董事會通過將三十三樓、三十四樓成立為台北分公司'
		}]
	},
	{
		time: '2002-06-14',
		body: [{
			tag: 'h6',
			content: "2002.06.14"
		},
		{
			tag: 'p',
			content: '第六屆第十四次董事會，經全體董事同意通過，推舉馬志玲先生為本公司董事長'
		}]
	},
	{
		time: '2002-10-29',
		body: [{
			tag: 'h6',
			content: "2002.10.29"
		},
		{
			tag: 'p',
			content: '33F&34F玻璃帷幕更新'
		}]
	},
	{
		time: '2002-11-22',
		body: [{
			tag: 'h6',
			content: "2002.11.22"
		},
		{
			tag: 'p',
			content: 'B1F員工餐廳裝修'
		}]
	},
	{
		time: '2002-12-23',
		body: [{
			tag: 'h6',
			content: "2002.12.23"
		},
		{
			tag: 'p',
			content: '大股東股權移轉，董監改選，馬志玲先生當選本公司第七屆董事長'
		}]
	},
	{
		time: '2003-01-01',
		body: [{
			tag: 'h6',
			content: "2003.01.01"
		},
		{
			tag: 'p',
			content: '本大樓地下一樓增設美髮、洗衣坊並將地下一樓員工餐廳改為交誼廳'
		}]
	},
	{
		time: '2003-02-25',
		body: [{
			tag: 'h6',
			content: "2003.02.25"
		},
		{
			tag: 'p',
			content: '第七屆第三次董事會通過世貿聯誼社改裝工程及組織變革案'
		}]
	},
	{
		time: '2003-06-02',
		body: [{
			tag: 'h6',
			content: "2003.06.02"
		},
		{
			tag: 'p',
			content: '成立世貿餐飲管理顧問公司後，接受國貿公司委託負責聯誼社之經營'
		}]
	},
	{
		time: '2003-08-08',
		body: [{
			tag: 'h6',
			content: "2003.08.08"
		},
		{
			tag: 'p',
			content: '1F大廳裝修'
		}]
	},
	{
		time: '2003-09-01',
		body: [{
			tag: 'h6',
			content: "2003.09.01"
		},
		{
			tag: 'p',
			content: '世貿聯誼社整修完成重新營業，並增加婚宴服務項目，擴大營業'
		}]
	},
	{
		time: '2003-12-01',
		body: [{
			tag: 'h6',
			content: "2003.12.01"
		},
		{
			tag: 'p',
			content: '1F商洽站裝修'
		}]
	},
	{
		time: '2004-05-07',
		body: [{
			tag: 'h6',
			content: "2004.05.07"
		},
		{
			tag: 'p',
			content: '世貿聯誼社取得變更使用執照'
		}]
	},
	{
		time: '2004-06-11',
		body: [{
			tag: 'h6',
			content: "2004.06.11"
		},
		{
			tag: 'p',
			content: '進行本大樓外牆藥劑清洗及防護工程'
		}]
	},
	{
		time: '2004-07-26',
		body: [{
			tag: 'h6',
			content: "2004.07.26"
		},
		{
			tag: 'p',
			content: '第七屆第六次董事會通過進行大樓空調系統更新工程'
		}]
	},
	{
		time: '2004-11-11',
		body: [{
			tag: 'h6',
			content: "2004.11.11"
		},
		{
			tag: 'p',
			content: '轉投資成立國貿公寓大廈管理維司護公司'
		}]
	},
	{
		time: '2004-12-20',
		body: [{
			tag: 'h6',
			content: "2004.12.20"
		},
		{
			tag: 'p',
			content: '大樓外牆預鑄版及窗框整修'
		}]
	},
	{
		time: '2005-02-05',
		body: [{
			tag: 'h6',
			content: "2005.02.05"
		},
		{
			tag: 'p',
			content: 'EV-18 & EV-19電梯更新'
		}]
	},
	{
		time: '2005-09-16',
		body: [{
			tag: 'h6',
			content: "2005.09.16"
		},
		{
			tag: 'p',
			content: '進行本大樓洗手間及茶水間更新工程'
		}]
	},
	{
		time: '2005-12-23',
		body: [{
			tag: 'h6',
			content: "2005.12.23"
		},
		{
			tag: 'p',
			content: '馬志玲先生連任本公司第八屆董事長'
		}]
	},
	{
		time: '2005-12-27',
		body: [{
			tag: 'h6',
			content: "2005.12.27"
		},
		{
			tag: 'p',
			content: '第八屆第一次董事會通過成立國貿公司台北營業處'
		}]
	},
	{
		time: '2006-01-01',
		body: [{
			tag: 'h6',
			content: "2006.01.01"
		},
		{
			tag: 'p',
			content: '國貿公司台北營業處正式進駐台北國際會議中心餐飲部'
		}]
	},
	{
		time: '2006-08-31',
		body: [{
			tag: 'h6',
			content: "2006.08.31"
		},
		{
			tag: 'p',
			content: '無障礙設施及洗手間'
		}]
	},
	{
		time: '2006-09-30',
		body: [{
			tag: 'h6',
			content: "2006.09.30"
		},
		{
			tag: 'p',
			content: '男、女洗手間及茶水間裝修更新'
		}]
	},
	{
		time: '2006-11-03',
		body: [{
			tag: 'h6',
			content: "2006.11.03"
		},
		{
			tag: 'p',
			content: '停車場地坪整修'
		}]
	},
	{
		time: '2006-12-01',
		body: [{
			tag: 'h6',
			content: "2006.12.01"
		},
		{
			tag: 'p',
			content: '設立ITB部落格'
		}]
	},
	{
		time: '2006-12-17',
		body: [{
			tag: 'h6',
			content: "2006.12.17"
		},
		{
			tag: 'p',
			content: '停車場管線及牆面粉刷'
		}]
	},
	{
		time: '2007-01-20',
		body: [{
			tag: 'h6',
			content: "2007.01.20"
		},
		{
			tag: 'p',
			content: '電梯車廂內地磚鋪設'
		}]
	},
	{
		time: '2007-03-31',
		body: [{
			tag: 'h6',
			content: "2007.03.31"
		},
		{
			tag: 'p',
			content: '大樓空調系統更新工程竣工'
		}]
	},
	{
		time: '2007-05-10',
		body: [{
			tag: 'h6',
			content: "2007.05.10"
		},
		{
			tag: 'p',
			content: '停車場入口美化燈箱'
		}]
	},
	{
		time: '2007-05-30',
		body: [{
			tag: 'h6',
			content: "2007.05.30"
		},
		{
			tag: 'p',
			content: '戶外景觀改善'
		}]
	},
	{
		time: '2007-09-30',
		body: [{
			tag: 'h6',
			content: "2007.09.30"
		},
		{
			tag: 'p',
			content: '台北國際會議中心宴會廳裝修'
		}]
	},
	{
		time: '2007-10-05',
		body: [{
			tag: 'h6',
			content: "2007.10.05"
		},
		{
			tag: 'p',
			content: '4F會議廳裝修'
		}]
	},
	{
		time: '2007-12-06',
		body: [{
			tag: 'h6',
			content: "2007.12.06"
		},
		{
			tag: 'p',
			content: '大樓戶外指標'
		}]
	},
	{
		time: '2007-12-17',
		body: [{
			tag: 'h6',
			content: "2007.12.17"
		},
		{
			tag: 'p',
			content: '建築物外觀夜景燈光及照明改善'
		}]
	},
	{
		time: '2007-12-30',
		body: [{
			tag: 'h6',
			content: "2007.12.30"
		},
		{
			tag: 'p',
			content: '更新電子式安定器照明燈具'
		}]
	},
	{
		time: '2008-05-01',
		body: [{
			tag: 'h6',
			content: "2008.05.01"
		},
		{
			tag: 'p',
			content: '馬志玲先生連任本公司第九屆董事長'
		}]
	},
	{
		time: '2008-07-01',
		body: [{
			tag: 'h6',
			content: "2008.07.01"
		},
		{
			tag: 'p',
			content: '本公司調整大樓辦公室租賃面積，回歸權狀面績計算'
		}]
	},
	{
		time: '2008-08-08',
		body: [{
			tag: 'h6',
			content: "2008.08.08"
		},
		{
			tag: 'p',
			content: '一樓西南側增設自行車停放區及自行車架'
		}]
	},
	{
		time: '2008-11-04',
		body: [{
			tag: 'h6',
			content: "2008.11.04"
		},
		{
			tag: 'p',
			content: '地下一樓淋浴間更新'
		}]
	},
	{
		time: '2008-12-30',
		body: [{
			tag: 'h6',
			content: "2008.12.30"
		},
		{
			tag: 'p',
			content: '更新租戶照明燈具'
		}]
	},
	{
		time: '2009-12-13',
		body: [{
			tag: 'h6',
			content: "2009.12.13"
		},
		{
			tag: 'p',
			content: '台北世界貿易中心四合一廣場美化工程動工'
		}]
	},
	{
		time: '2011-04-24',
		body: [{
			tag: 'h6',
			content: "2011.04.24"
		},
		{
			tag: 'p',
			content: '台北世界貿易中心四合一廣場完工啟用，命名為「世貿廣場」。由國際建築設計大師伊東豐雄設計的「世貿廣場」落成，國貿大樓董事長馬志玲及外貿協會秘書長趙永全共同揭牌啟用，將這塊占地二千四百坪的台北市醉有價值綠地獻給台北市民，由台北市議會議長吳碧珠代表接受，並大力讚揚這是企業回饋社會的最佳典範。'
		}]
	},
	{
		time: '2011-05-17',
		body: [{
			tag: 'h6',
			content: "2011.05.17"
		},
		{
			tag: 'p',
			content: '馬志玲先生連任本公司第十屆董事長。'
		}]
	},
	{
		time: '2011-06-10',
		body: [{
			tag: 'h6',
			content: "2011.06.10"
		},
		{
			tag: 'p',
			content: '完成停車場出入口防洪設備裝置工程，防水閘門高於海平面9米96，為台北市第一高，可預防驟雨淹水，增強大樓防災能力。'
		}]
	},
	{
		time: '2011-11-30',
		body: [{
			tag: 'h6',
			content: "2011.11.30"
		},
		{
			tag: 'p',
			content: '完成聯誼社33F宴會廳裝修更新工程，提升宴會服務環境及視覺，強化宴會市場競爭力。'
		}]
	},
	{
		time: '2011-12-30',
		body: [{
			tag: 'h6',
			content: "2011.12.30"
		},
		{
			tag: 'p',
			content: '完成地下二樓柴油發電機整修工程，確保大樓供電正常，強化大樓服務品質。'
		}]
	},
	{
		time: '2011-12-30',
		body: [{
			tag: 'h6',
			content: "2011.12.30"
		},
		{
			tag: 'p',
			content: '完成機房及早期火警偵測系統建置工程，提升機房消防功能。'
		}]
	},
	{
		time: '2011-12-30',
		body: [{
			tag: 'h6',
			content: "2011.12.30"
		},
		{
			tag: 'p',
			content: '世貿聯誼社榮獲世貿中心協會(WTCA)2012年評鑑為「全球最佳營運」殊榮。'
		}]
	},
	{
		time: '2013-10-28',
		body: [{
			tag: 'h6',
			content: "2013.10.28"
		},
		{
			tag: 'p',
			content: '完成世貿聯誼社國譽一、二廳(Glory Catle I II)及國賓二廳(Capitol Hall II)裝修工程，提供頂級餐飲服務。'
		}]
	},
	{
		time: '2013-12-30',
		body: [{
			tag: 'h6',
			content: "2013.12.30"
		},
		{
			tag: 'p',
			content: '國貿大樓榮獲全球最大房仲業者世邦魏理仕(CBRE)評選為2013年「北市10大商辦」殊榮。'
		}]
	},
	{
		time: '2014-03-31',
		body: [{
			tag: 'h6',
			content: "2014.03.31"
		},
		{
			tag: 'p',
			content: '馬維建先生當選本公司第11屆董事長。'
		}]
	},
	{
		time: '2014-06-10',
		body: [{
			tag: 'h6',
			content: "2014.06.10"
		},
		{
			tag: 'p',
			content: '國貿大樓一樓北門落地門窗及門廊美化工程完工。'
		}]
	},
	{
		time: '2014-06-15',
		body: [{
			tag: 'h6',
			content: "2014.06.15"
		},
		{
			tag: 'p',
			content: '世貿廣場舉辦第一場戶外婚禮。'
		}]
	},
	{
		time: '2016-09-30',
		body: [{
			tag: 'h6',
			content: "2016.09.30"
		},
		{
			tag: 'p',
			content: '完成國貿大樓中央監控與閉路監視(CCTV)系統更新工程，提升監控效能、符合安全需求。'
		}]
	},
	{
		time: '2017-03-20',
		body: [{
			tag: 'h6',
			content: "2017.03.20"
		},
		{
			tag: 'p',
			content: '馬維建先生連任本公司第12屆董事長。'
		}]
	},
	{
		time: '2018-12-30',
		body: [{
			tag: 'h6',
			content: "2018.12.30"
		},
		{
			tag: 'p',
			content: '建築模型資續管理系統建置完成。'
		}]
	},
	{
		time: '2019-07-01',
		body: [{
			tag: 'h6',
			content: "2019.07"
		},
		{
			tag: 'p',
			content: 'ITB正式更名為「WTC」(World Trade Center)。'
		}]
	}
];