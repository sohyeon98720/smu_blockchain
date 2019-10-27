// Meteor.setInterval(function() {
// //   web3...
// // }, 1000);

var Web3=require("web3");
web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8405"));
var lastcareerContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getEdu","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"aID","type":"address"},{"name":"a","type":"uint8"},{"name":"time","type":"uint256"}],"name":"setAut_Career","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint128"}],"name":"setCareer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"aID","type":"address"}],"name":"getApplicant","outputs":[{"name":"","type":"string"},{"name":"","type":"uint128"},{"name":"","type":"uint128"},{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sendCareer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"uint128"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"submit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"aID","type":"address"},{"name":"a","type":"uint8"},{"name":"time","type":"uint256"}],"name":"setAut_Edu","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAut_Edu","outputs":[{"name":"","type":"uint8"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"aID","type":"address"}],"name":"getCareerFromA","outputs":[{"name":"","type":"string"},{"name":"","type":"uint128"},{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sendEdu","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCareerRequest","outputs":[{"name":"","type":"address[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getApplyRequest","outputs":[{"name":"","type":"address[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"aID","type":"address"}],"name":"getEduFromA","outputs":[{"name":"","type":"string"},{"name":"","type":"uint128"},{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCareer","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAut_Career","outputs":[{"name":"","type":"uint8"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEduRequest","outputs":[{"name":"","type":"address[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint128"}],"name":"setEdu","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"uint128"},{"name":"c","type":"string"},{"name":"d","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

var last=lastcareerContract.at("0x4194D3eB92305B3C0f7C8c1b03397DcD119F9d69");

// console.log(web3.eth.mining);

Meteor.methods({
  setNum: function(p_Type) {
  //회원가입 -  소속 선택. 인자는 1,2,3 중 하나.(1-지원자,2-학교,3-기업)
    last.setNum.sendTransaction(p_Type,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good1 + ", p_Type);
      }
      else{
        console.log("Error1");
      }
    })
  },
  setInfo: function(p_Name,p_Number,c_Name,c_Number){
  //회원가입 - 인적사항 네가지 작성(지원자인 경우는 인자가 두개만 들어가면되서 뒤의 두개는 null로 들어감)
    last.setInfo.sendTransaction(p_Name,p_Number,c_Name,c_Number,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good2+ ",p_Name);
      }
      else{
        console.log("Error2");
      }
    })
  },
  setEdu: function(uni_GraduNumber){
    //지원자만 - 학력작성(졸업증명서 번호입력)
    last.setEdu.sendTransaction(uni_GraduNumber,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good3 + ",uni_GraduNumber);
      }
      else{
        console.log("Error3");
      }
    })
  },
  setCareer:function(com_Number){
    //지원자만 - 경력작성(경력증명서 번호입력)
    last.setCareer.sendTransaction(com_Number,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good4 + ",com_Number);
      }
      else{
        console.log("Error4");
      }
    })
  },
  getInfo:function(){
    //인적사항 확인
    var a=last.getInfo.call().toString();
    console.log(a);
  },
  getEdu:function(){
    //지원자만 - 자신의 학력 확인
    var b=last.getEdu.call().toString();
    console.log(b);
  },
  getCareer:function(){
    //지원자만 - 자신의 경력 확인
    var c=last.getCareer.call().toString();
    console.log(c);
  },
  sendEdu:function(){
    //지원자만 - 학력전송
    last.sendEdu.sendTransaction({
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good5 + sendEdu");
      }
      else{
        console.log("Error5");
      }
    })
  },
  sendCareer:function(){
    //지원자만 - 경력전송
    last.sendCareer.sendTransaction({
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good6 + sendCareer");
      }
      else{
        console.log("Error6");
      }
    })
  },
  //학교만 - 요청받은 학력 확인
  getEduRequest:function(){
    var d=last.getEduRequest.call().toString();
    console.log(d);
  },
  //기업만 - 요청받은 경력 확인
  getCareerRequest:function(){
    var e=last.getCareerRequest.call().toString();
    console.log(e);
  },
  //학교만 - 요청 리스트 중 하나 확인.address 넣어야함
  getEduFromA:function(applicant_Addr){
    var f=last.getEduFromA.call(applicant_Addr).toString();
    console.log(f);
  },
  //기업만 - 요청 리스트 중 하나 확인.address 넣어야함
  getCareerFromA:function(applicant_Addr){
    var g=last.getCareerFromA.call(applicant_Addr).toString();
    console.log(g);
  },
  //학교만 - 요청 리스트 중 하나의 인증상태를 설정해줌. address, 인증여부(숫자),날짜(숫자)넣어야함
  setAut_Edu:function(applicant_Addr, uni_Author, uni_Time){
    last.setAut_Edu.sendTransaction(applicant_Addr,uni_Author, uni_Time,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good7");
      }
      else{
        console.log("Error7");
      }
    })
  },
  //기업만 - 요청 리스트 중 하나의 인증상태를 설정해줌. address, 인증여부(숫자),날짜(숫자)넣어야함
  setAut_Career:function(applicant_Addr, com_Author, com_Time){
    last.setAut_Career.sendTransaction(applicant_Addr, com_Author, com_Time,{
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good8");
      }
      else{
        console.log("Error8");
      }
    })
  },
  //지원자만 - 자신의 학력 인증여부를 보는 곳
  getAut_Edu:function(){
    var h=last.getAut_Edu.call();
    console.log(h);
  },
  //지원자만 - 자신의 경력 인증여부를 보는 곳
  getAut_Career:function(){
    var i=last.getAut_Career.call();
    console.log(i);
  },
  //지원자만 - 학력, 경력 인증여부가 okay일 때만 기업에 지원.
  submit:function(){
    last.submit.sendTransaction({
      from:web3.eth.coinbase,
    },function(error,transactionHash){
      if(!error){
        console.log("Good9");
      }
      else{
        console.log("Error9");
      }
    })
  },
  //기업만 - 자신의 기업에 지원한 지원자의 계좌 리스트를 반환.
  getApplyRequest:function(){
    var j=last.getApplyRequest.call();
    console.log(j);
  },
  //기업만 - 자신의 기업에 지원한 지원자의 계좌를 입력하면 지원자의 이력서가 반환됨
  getApplicant:function(applicant_Addr){
    var k=last.getApplicant.call(applicant_Addr);
    console.log(k);
  },

  saveInfo: function(gender,birth,phoneNumber, homeAdd, email){
    DB_RESUME.insert({
      gender:gender,
      birth:birth,
      phoneNumber:phoneNumber,
      homeAdd:homeAdd,
      email:email
    });
    return "성공"
  },
  saveEdu: function(eduData,uni_GraduNumber){
    DB_RESUME.insert({
      eduData,
      uni_GraduNumber:uni_GraduNumber
    });
    return "성공"
  },
  saveCareer: function(careerData,com_Number){
    console.log(com_Number);
    DB_RESUME.insert({
      careerData,
      com_Number:com_Number
    });
    return "성공"
  },
  saveSpec: function(specData,spec_Number){
    console.log(spec_Number);
    DB_RESUME.insert({
      specData,
      com_Number:spec_Number
    });
    return "성공"
  }
  //insert 안에 id를 주고 update 사용!



  // saveResume: function(firstName, credit) {
  //   console.log(firstName, credit);
  //   // var hash = web3.ijefiwjf.fweijfiewjf
  //   // web3.eth.coinbase.then(function(err, coinbase, param2, param3) {
  //   //   console.log param1.
  //   //
  //   //   if(!!err) alert{}
  //   //   else
  //   //     DB_RESUME.insert({
  //   //       firstName: firstName,
  //   //       credit: credit,
  //   //       createdAt: new Date()
  //   //       hash: coinbase
  //   //     })
  //   // })
  // },
  // removeResume: function() {
  //   // web3.iwejfiewj
  // }
})












// import fs from 'fs';
// var Web3 = require("web3");
// // import Web3 from 'web3';
//
// var web3 = new Web3(new Web3.providers.HttpProvider("http://117.16.44.111:38405"));
// var proofContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],"name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}]);
// var proof = proofContract.at("0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
// console.log(web3.eth.coinbase)
//
//
// // var proof = new web3.eth.contract([{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],"name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}], "0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
// // // web3.eth.isMining().then(console.log);
// // console.log(web3.eth.coinbase);
// // var proof = proofContract.at("0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
//
//
// Meteor.startup(() => {
//   // code to run on server at startup
//   // var file = fs.readFileSync('/Users/kakadais/WebstormProjects/codeasy/public/images/samples/0001.jpeg')
//   // CodeasyFiles.insert({
//   //   file: file
//   // })
//   // console.log(CodeasyFiles.insert)
//   // console.log(process.env.ROOT_URL)
// });
//
