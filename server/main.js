// Meteor.setInterval(function() {
// //   web3...
// // }, 1000);

var Web3=require("web3");
web3=new Web3(new Web3.providers.HttpProvider("http://localhost:405"));
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
  getInfo: function () {
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
  //학교만 - 요청받은 학력 확인
  getEduRequest:function(){
    var d=last.getEduRequest.call().toString();
    console.log(d);
    return d;
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
  setAut_Career:function(applicant_Addr,com_Author, com_Time){
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


  //DB 저장
  saveInfo: function(infoData){

    var userInfo = Meteor.user();

    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.phoneNumber': infoData.phoneNumber,
        'profile.homeAdd': infoData.homeAdd,
        'profile.email': infoData.email,
        'profile.gender': infoData.gender,
        'profile.birth': infoData.birth
      }
    })
    return "원서함에 저장되었습니다."
  },

  saveEdu: function (eduData, uni_GraduNumber) {
    var userInfo = Meteor.user();
      Meteor.users.update({_id: userInfo._id}, {
        $set: {
          'profile.uni_Year': eduData.uni_Year,
          'profile.uni_Name': eduData.uni_Name,
          'profile.uni_Region': eduData.uni_Region,
          'profile.uni_Major': eduData.uni_Major,
          'profile.uni_MajorBelong': eduData.uni_MajorBelong,
          'profile.uni_Department': eduData.uni_Department,
          'profile.uni_BeginDate': eduData.uni_BeginDate,
          'profile.uni_HowBegin': eduData.uni_HowBegin,
          'profile.uni_EndDate': eduData.uni_EndDate,
          'profile.uni_HowEnd': eduData.uni_HowEnd,
          'profile.uni_DaynNight': eduData.uni_DaynNight,
          'profile.uni_Grade': eduData.uni_Grade,
          'profile.uni_Total': eduData.uni_Total,
          'profile.uni_GradeNumber': eduData.uni_GradeNumber,
          'profile.uni_file': eduData.uni_file,  //파일의 id
          'profile.uni_Journal': eduData.uni_Journal,
          'profile.uni_GraduNumber':uni_GraduNumber,
          'profile.uniApply':false,
          'profile.uni_Author':'-'
        }
      }),
      last.setEdu.sendTransaction(uni_GraduNumber,{from:web3.eth.coinbase});
    return "원서함에 저장되었습니다."
  },
  saveCareer: function (careerData, com_Number) {
    var userInfo = Meteor.user();
      Meteor.users.update({_id: userInfo._id}, {
        $set: {
          'profile.com_Name': careerData.com_Name,
          'profile.com_BeginDate': careerData.com_BeginDate,
          'profile.com_EndDate': careerData.com_EndDate,
          'profile.com_HowEnd': careerData.com_HowEnd,
          'profile.com_File': careerData.com_File,
          'profile.com_EndReason': careerData.com_EndReason,
          'profile.com_Position': careerData.com_Position,
          'profile.com_Field': careerData.com_Field,
          'profile.com_Region': careerData.com_Region,
          'profile.com_Number': com_Number,
          'profile.comApply':false,
          'profile.com_Author':'-'
        }
      }),
      last.setCareer.sendTransaction(com_Number,{from:web3.eth.coinbase});
    return "원서함에 저장되었습니다."
  },
  saveSpec: function(specData,spec_Number){
    console.log(spec_Number);
    var userInfo = Meteor.user();
    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.spec_What': specData.spec_What,
          'profile.spec_Name': specData.spec_Name,
          'profile.spec_Organization': specData.spec_Organization,
          'profile.spec_Number':spec_Number,
          'profile.spec_file':spec_file,
          'profile.spec_GetDate': specData.spec_GetDate,
          'profile.spec_Facebook': specData.spec_Facebook,
          'profile.spec_Instagram': specData.spec_Instagram,
          'profile.spec_Cafe': specData.spec_Cafe,
          'profile.spec_Blog': specData.spec_Blog,
      }
    })
    return "원서함에 저장되었습니다."
  },
  saveComApply: function(comApply){
    var userInfo = Meteor.user();
    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.comApply': comApply,
        'profile.com_Author':"확인 중"
      }
    }),
    last.sendCareer({from:web3.eth.coinbase});
  return "경력 인증 요청이 되었습니다."
  },

  saveUniApply: function(uniApply){
    var userInfo = Meteor.user();
    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.uniApply': uniApply,
        'profile.uni_Author':"확인 중"
      }
    }),
    last.sendEdu({from:web3.eth.coinbase});
  return "학력 인증 요청이 되었습니다."
  },

  saveComAuthor: function(com_Author,_id){

    if(com_Author==='승인'){
      num1=0;
    }
    else num1=1;

    var account1= Meteor.users.findOne({_id:_id}).profile.accountKey;
    Meteor.users.update({_id:_id}, {
        $set: {
          'profile.com_Author': com_Author,
          'profile.comApply':false
        }
      })

    last.setAut_Career(account1,num1,Date.now(),{from:web3.eth.coinbase});

  return "경력 인증이 완료되었습니다."
  },
  saveUniAuthor: function(uni_Author,_id){
    if(uni_Author==='승인'){
      num2=0;
    }
    else var num2=1;

    var account2= Meteor.users.findOne({_id:_id}).profile.accountKey;

    Meteor.users.update({_id:_id}, {
      $set: {
        'profile.uni_Author': uni_Author,
        'profile.uniApply':false
      }
    }),
    last.setAut_Edu(account2,num2,Date.now(),{from:web3.eth.coinbase});
  return "학력 인증이 완료되었습니다."
  },
  saveSubmitAll: function(submitAll,_id) {
    var userInfo = Meteor.user();
    if (userInfo.profile.com_Author === '승인' && userInfo.profile.uni_Author === '승인') {
      Meteor.users.update({_id: userInfo._id}, {
        $set: {
          'profile.submitAll': submitAll
        }
      }),
          last.submit(
              {
                from: web3.eth.coinbase,
              }, function (error, transactionHash) {
                if (!error) {
                  return "이력서 제출이 완료되었습니다.+!!!!!!!"
                } else {
                  return "오류발생!!!!!";
                }
              })
      //return "이력서 제출이 완료되었습니다."
    } else if (userInfo.profile.com_Author === '확인 중' || userInfo.profile.uni_Author === '확인 중') {
      return "이력서 제출이 불가합니다. 인증 확인중입니다. 승인 후 제출해주세요."
    } else if (userInfo.profile.com_Author === '승인' && userInfo.profile.uni_Author !== '승인') {
      return "이력서 제출이 불가합니다. 학력 확인 부탁드립니다."
    } else if (userInfo.profile.com_Author !== '승인' && userInfo.profile.uni_Author === '승인') {
      return "이력서 제출이 불가합니다. 경력 확인 부탁드립니다."
    } else {
      return "이력서 제출이 불가합니다. 학력, 경력 확인 부탁드립니다."
    }
  },
  deleteApplicant:function(_id,submitAll){
    Meteor.users.update({_id:_id},{
      $set: {
        'profile.submitAll': submitAll
      }
    })
    return "해당 지원자가 삭제되었습니다.";
  }
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
