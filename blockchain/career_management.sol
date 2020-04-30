pragma solidity >=0.4.22 <0.6.0;

//remix에 해당 코드 배포 후 compilation details-WEB3DEPLOY내용을 이용하여 웹과 연결
contract lastCareer{
    struct Info {//인적사항
       string name;//이름
       uint128 pnumber;//주민등록번호
       string cnumber;//사업자번호
       string cname;//기관명
   }
   struct Edu{//학력
       uint128 num;
   }
   struct Career{//경력
       uint128 num;
   }
   struct Aut_Edu{
       uint8 EduStatus;//학력인증여부(0,1)
       string PersonOfAut;//인증담당자
       uint DateOfAut;
   }
   struct Aut_Career{
       uint8 CareerStatus;//경력인증여부(0,1)
       string PersonOfAut;//인증담당자
       uint DateOfAut;
   }
    mapping (address  => uint256) Map_0;//address -> 1,2,3
    mapping (address  => Info) Map_1;
    mapping (address  => Edu) Map_2;
    mapping (address  => Career) Map_3;
    mapping (address  => Aut_Edu) Map_4;
    mapping (address  => Aut_Career) Map_5;
    
    //---------------------------------------------------------------------
    
    modifier onlyApplicant(){
       require (Map_0[msg.sender]==1);
       _;
   }
   modifier onlyUni(){
       require (Map_0[msg.sender]==2);
       _;
   }
   modifier onlyCom(){
       require (Map_0[msg.sender]==3);
       _;
   }
   
   modifier onlyReady(){
       require(Map_4[msg.sender].EduStatus==0 && Map_5[msg.sender].CareerStatus!=1);    
       _;
   }
   
   //---------------------------------------------------------------------
   
   address [10] eduList; //인증요청리스트
   address [10] careerList;
   uint32 indexEdu=0;
   uint32 indexCareer=0;
   
   address[10] applyList;
   uint32 indexApply=0;
   
   //---------------------------------------------------------------------
   
   function setNum(uint a)public{
       Map_0[msg.sender]=a;
   }
   function setInfo(string memory a,uint128 b,string memory c, string memory d)public {
       Info memory ii=Info(a,b,c,d);//1이면 c,d가 자동채워져야함
       Map_1[msg.sender]=ii;
   }
   function setEdu(uint128 num) public onlyApplicant{
        delete Map_2[msg.sender];
        delete Map_4[msg.sender];
        Edu memory ee=Edu(num);
        Map_2[msg.sender]=ee;
   }
   function setCareer(uint128 num)public onlyApplicant{
       delete Map_3[msg.sender];
       delete Map_5[msg.sender];
       Career memory cc=Career(num);
       Map_3[msg.sender]=cc;
   }
   
    function getInfo()public view returns (string memory,uint128,string memory,string memory){
       return (Map_1[msg.sender].name,Map_1[msg.sender].pnumber,Map_1[msg.sender].cnumber,Map_1[msg.sender].cname);
   }
   function getEdu()public view onlyApplicant returns(uint128){
       return(Map_2[msg.sender].num);
   }
   function getCareer()public view onlyApplicant returns (uint128){
       return (Map_3[msg.sender].num);
   }
   
   function sendEdu() public onlyApplicant{
       eduList[indexEdu]=msg.sender;
       indexEdu++;
   }
   function sendCareer() public onlyApplicant{
       careerList[indexCareer]=msg.sender;
       indexCareer++;
   }
   
   //---------------------------------------------------------------------
   
   function getEduRequest() public view onlyUni returns(address[10] memory){
       return eduList;
   }
   function getCareerRequest() public view onlyCom returns(address[10] memory){
       return careerList;
   }
   
   
   function getEduFromA(address aID) public view onlyUni returns(string memory,uint128,uint128){
       return (Map_1[aID].name, Map_1[aID].pnumber,Map_2[aID].num);
   }
   function getCareerFromA(address aID) public view onlyCom returns(string memory,uint128,uint128){
       return (Map_1[aID].name,Map_1[aID].pnumber,Map_3[aID].num);
   }
   
   //string name으로 변환
   
   function setAut_Edu(address aID, uint8 a,uint time)public onlyUni{
       Aut_Edu memory aa=Aut_Edu(a, Map_1[msg.sender].name,time);
       Map_4[aID]=aa;
       for(uint i=0;i<10;i++){
           if(eduList[i]==aID){
               delete eduList[i];
               indexEdu--;
               break;
           }
       }
   }
   function setAut_Career(address aID, uint8 a,uint time)public onlyCom{
      Aut_Career memory aa=Aut_Career(a,Map_1[msg.sender].name,time);
      Map_5[aID]=aa;
      for(uint i=0;i<10;i++){
           if(careerList[i]==aID){
               delete careerList[i];
               indexCareer--;
               break;
           }
       }
   }
   //aID->name
   
   //---------------------------------------------------------------------
  
    function getAut_Edu()public view  onlyApplicant returns(uint8, string memory, uint){
       return (Map_4[msg.sender].EduStatus,Map_4[msg.sender].PersonOfAut,Map_4[msg.sender].DateOfAut);
   }
   function getAut_Career()public view  onlyApplicant returns(uint8, string memory,uint){
       return (Map_5[msg.sender].CareerStatus,Map_5[msg.sender].PersonOfAut,Map_5[msg.sender].DateOfAut);
   }
   function submit() public onlyReady onlyApplicant{
       applyList[indexApply]=msg.sender;
       indexApply++;
   }
   //---------------------------------------------------------------------
   
   function getApplyRequest() public view onlyCom returns(address[10] memory){
       return applyList;
   }
   
   function getApplicant(address aID) public view onlyCom returns(string memory,uint128,uint128,uint128){
       return (Map_1[aID].name,Map_1[aID].pnumber,Map_2[aID].num,Map_3[aID].num);
   }
}
