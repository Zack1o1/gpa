function gpa(){
const engT=parseFloat(document.querySelector('#engT').value)
const engP=parseFloat(document.querySelector('#engP').value)
const nepT=parseFloat(document.querySelector('#nepT').value)
const nepP=parseFloat(document.querySelector('#nepP').value)
const mathT=parseFloat(document.querySelector('#mathT').value)
const mathP=parseFloat(document.querySelector('#mathP').value)
const phyT=parseFloat(document.querySelector('#phyT').value)
const phyP=parseFloat(document.querySelector('#phyP').value)
const chemT=parseFloat(document.querySelector('#chemT').value)
const chemP=parseFloat(document.querySelector('#chemP').value)
const compT=parseFloat(document.querySelector('#compT').value)
const compP=parseFloat(document.querySelector('#compP').value)

const show=document.querySelector('#show')
const show_grade=document.querySelector('#show_grade')
//percentage
const eng_perT=(engT/75)*100
const eng_perP=(engP/25)*100
const nep_perT=(nepT/75)*100
const nep_perP=(nepP/25)*100
const math_perT=(mathT/75)*100
const math_perP=(mathP/25)*100
const phy_perT=(phyT/75)*100
const phy_perP=(phyP/25)*100
const chem_perT=(chemT/75)*100
const chem_perP=(chemP/25)*100
const comp_perT=(compT/50)*100
const comp_perP=(compP/50)*100

let eng,eng2,nep,nep2,math,math2,phy,phy2,chem,chem2,comp,comp2
//grading system
let A_plus=4,A=3.6,B_plus=3.2,B=2.8,C_plus=2.4,C=2.0,D=1.6,NG=0
//total grade
let total_eng,total_nep,total_phy,total_chem,total_comp
//credit hours total credit hours 27(grade 12)
let cr_engT=3.00,cr_engP=1.00,cr_nepT=2.25,cr_nepP=0.75,cr_mathT=3.75,cr_mathP=1.25,
cr_phyT=3.75,cr_phyP=1.25,cr_chemT=3.75,cr_chemP=1.25,cr_compT=2.50,cr_compP=2.50
//total credit hrs and total gpa*cr hr
let total_credit=27.0,total_gpa=0,final_gpa
//90-100% 4 gpa A+
if(eng_perT>90)
   eng=A_plus
if(eng_perP>90)
	eng2=A_plus
if(nep_perT>90)
   nep=A_plus
if(nep_perP>90)
	nep2=A_plus
if(math_perT>90)
   math=A_plus
if(math_perP>90)
	math2=A_plus
if(phy_perT>90)
   phy=A_plus
if(phy_perP>90)
	phy2=A_plus
if(chem_perT>90)
   chem=A_plus
if(chem_perP>90)
	chem2=A_plus
if(comp_perT>90)
   comp=A_plus
if(comp_perP>90)
	comp2=A_plus
//80-90% 3.6 A
if(eng_perT<90)
   eng=A
if(eng_perP<90)
	eng2=A
if(nep_perT<90)
   nep=A
if(nep_perP<90)
	nep2=A
if(math_perT<90)
   math=A
if(math_perP<90)
	math2=A
if(phy_perT<90)
   phy=A
if(phy_perP<90)
	phy2=A
if(chem_perT<90)
   chem=A
if(chem_perP<90)
	chem2=A
if(comp_perT<90)
   comp=A
if(comp_perP<90)
	comp2=A
//70-80% 3.2 gpa B+
if(eng_perT<80)
   eng=B_plus
if(eng_perP<80)
	eng2=B_plus
if(nep_perT<80)
   nep=B_plus
if(nep_perP<80)
	nep2=B_plus
if(math_perT<80)
   math=B_plus
if(math_perP<80)
	math2=B_plus
if(phy_perT<80)
   phy=B_plus
if(phy_perP<80)
	phy2=B_plus
if(chem_perT<80)
   chem=B_plus
if(chem_perP<80)
	chem2=B_plus
if(comp_perT<80)
   comp=B_plus
if(comp_perP<80)
	comp2=B_plus
//60-70% 2.8 gpa B
if(eng_perT<70)
   eng=B
if(eng_perP<70)
	eng2=B
if(nep_perT<70)
   nep=B
if(nep_perP<70)
	nep2=B
if(math_perT<70)
   math=B
if(math_perP<70)
	math2=B
if(phy_perT<70)
   phy=B
if(phy_perP<70)
	phy2=B
if(chem_perT<70)
   chem=B
if(chem_perP<70)
	chem2=B
if(comp_perT<70)
   comp=B
if(comp_perP<70)
	comp2=B
//50-60% 2.4 gpa C+
if(eng_perT<60)
   eng=C_plus
if(eng_perP<60)
	eng2=C_plus
if(nep_perT<60)
   nep=C_plus
if(nep_perP<60)
	nep2=C_plus
if(math_perT<60)
   math=C_plus
if(math_perP<60)
	math2=C_plus
if(phy_perT<60)
   phy=C_plus
if(phy_perP<60)
	phy2=C_plus
if(chem_perT<60)
   chem=C_plus
if(chem_perP<60)
	chem2=C_plus
if(comp_perT<60)
   comp=C_plus
if(comp_perP<60)
	comp2=C_plus
// 40-50% 2 gpa C
if(eng_perT<50)
   eng=C
if(eng_perP<50)
	eng2=C
if(nep_perT<50)
   nep=C
if(nep_perP<50)
	nep2=C
if(math_perT<50)
   math=C
if(math_perP<50)
	math2=C
if(phy_perT<50)
   phy=C
if(phy_perP<50)
	phy2=C
if(chem_perT<50)
   chem=C
if(chem_perP<50)
	chem2=C
if(comp_perT<50)
   comp=C
if(comp_perP<50)
	comp2=C
//35-40% 1.6 gpa D
if(eng_perT<40)
   eng=D
if(eng_perP<40)
	eng2=D
if(nep_perT<40)
   nep=D
if(nep_perP<40)
	nep2=D
if(math_perT<40)
   math=D
if(math_perP<40)
	math2=D
if(phy_perT<40)
   phy=D
if(phy_perP<40)
	phy2=D
if(chem_perT<40)
   chem=D
if(chem_perP<40)
	chem2=D
if(comp_perT<40)
   comp=D
if(comp_perP<40)
	comp2=D
//0-35% X gpa NG
if(eng_perT<35)
   eng=NG
if(eng_perP<35)
	eng2=NG
if(nep_perT<35)
   nep=NG
if(nep_perP<35)
	nep2=NG
if(math_perT<35)
   math=NG
if(math_perP<35)
	math2=NG
if(phy_perT<35)
   phy=NG
if(phy_perP<35)
	phy2=NG
if(chem_perT<35)
   chem=NG
if(chem_perP<35)
	chem2=NG
if(comp_perT<35)
   comp=NG
if(comp_perP<35)
	comp2=NG

//total gpa cr* gpa
total_eng=(eng*cr_engT)+(eng2*cr_engP)
total_nep=(nep*cr_nepT)+(nep2*cr_nepP)
total_math=(math*cr_mathT)+(math2*cr_mathP)
total_phy=(phy*cr_phyT)+(phy2*cr_phyP)
total_chem=(chem*cr_chemT)+(chem2*cr_chemP)
total_comp=(comp*cr_compT)+(comp2*cr_compP)

//total gpa of all subjects
total_gpa=total_eng+total_nep+total_math+total_phy+total_chem+total_comp

//final gpa
final_gpa=total_gpa/total_credit
show.textContent="GPA: "+final_gpa.toFixed(2)
if(final_gpa>3.6)
  show_grade.textContent="Grade: A+"
else if(final_gpa>3.2)
  show_grade.textContent="Grade: A"
else if(final_gpa>2.8)
  show_grade.textContent="Grade: B+"
else if(final_gpa>2.4)
  show_grade.textContent="Grade: B"
else if(final_gpa>2)
  show_grade.textContent="Grade: C+"
else if(final_gpa>1.6)
  show_grade.textContent="Grade: C"
else
	show_grade.textContent="Grade: NG"
}