(function(){var st=document.createElement('style');st.textContent=".s3{--c-MA:#6B4FC4;--c-MOS:#9A5B00;--c-FM:#0B7A6F;--c-MP:#8C5A3C;--c-AI:#B83A7A;--c-EE:#4C7A34;--c-ECT:#6F7F1E;--c-ALL:#6b6a64;--c-LAB:#6b6a64}\n@media(prefers-color-scheme:dark){:root:not([data-theme=\"light\"]) .s3{--c-MA:#A892F2;--c-MOS:#E5A64A;--c-FM:#4FC9BA;--c-MP:#D1A07E;--c-AI:#E884B5;--c-EE:#93C874;--c-ECT:#B7C85A;--c-ALL:#9b9a92;--c-LAB:#9b9a92}}\n:root[data-theme=\"dark\"] .s3{--c-MA:#A892F2;--c-MOS:#E5A64A;--c-FM:#4FC9BA;--c-MP:#D1A07E;--c-AI:#E884B5;--c-EE:#93C874;--c-ECT:#B7C85A;--c-ALL:#9b9a92;--c-LAB:#9b9a92}\n.s3 h2{margin:18px 0 6px}.s3 ul{list-style:none;margin:0;padding:0}\n.s3 .nx{display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap}.s3 .big{font-size:56px;font-weight:700;line-height:.9;font-variant-numeric:tabular-nums}\n.s3 .ov{min-width:130px;flex:1 1 130px}.s3 .nm{display:flex;justify-content:space-between;gap:8px;margin-bottom:4px}\n.s3 .evr{display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:7px 0;border-top:1px solid var(--bd)}.s3 .evr:first-child{border-top:0}.s3 .evd{min-width:84px}.s3 .evt{flex:1 1 130px;min-width:0}\n.s3 .exb{padding:10px 0;border-top:1px solid var(--bd)}.s3 .exb:first-child{border-top:0;padding-top:0}\n.s3 .exr{display:grid;grid-template-columns:56px 1fr auto;gap:10px;align-items:center}\n.s3 .exd{font-size:11px;color:var(--bad);text-transform:uppercase}.s3 .exd b{display:block;font-size:20px;color:var(--tx);line-height:1.1}\n.s3 .exn b,.s3 .exn small{display:block}.s3 .exg{text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:3px}\n.s3 .pill{font-size:11.5px;font-weight:600;padding:2px 7px;border:1.5px solid var(--ac);color:var(--ac);border-radius:6px}.s3 .pill.s{background:var(--ac);color:#fff}\n.s3 .exp{display:flex;justify-content:space-between}\n.s3 details.ph>summary{padding:4px 0}.s3 .mu{display:block;margin:4px 0}\n.s3 .day{background:var(--bg);border:1px solid var(--bd);border-radius:12px;padding:8px 12px 2px;margin-top:10px}.s3 .day.today{border:2px solid var(--ac)}\n.s3 .day-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap;padding-bottom:6px;border-bottom:1px solid var(--bd)}\n.s3 .day-h h3{margin:0;font-size:16px}.s3 .day-h .tag{border:0;margin:0;padding:0;font-size:11.5px;color:var(--mu)}.s3 .day-h .tag.now{color:var(--ac)}\n.s3 .row{align-items:flex-start;border-top:0;border-bottom:1px solid var(--bd);cursor:pointer;padding:9px 0}\n.s3 li:last-child>.row,.s3 li:last-child.examrow{border-bottom:0}\n.s3 .row input{width:22px;height:22px;flex:none;margin:1px 0 0;padding:0;accent-color:var(--ok)}\n.s3 .txt{display:block;min-width:0}.s3 .meta{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n.s3 .time{font:12px ui-monospace,Menlo,monospace;color:var(--mu)}\n.s3 .sj{font:600 10.5px ui-monospace,Menlo,monospace;padding:2px 5px;border:1px solid currentColor;border-radius:4px;color:var(--c-ALL)}\n.s3 .sj-MA{color:var(--c-MA)}.s3 .sj-MOS{color:var(--c-MOS)}.s3 .sj-FM{color:var(--c-FM)}.s3 .sj-MP{color:var(--c-MP)}.s3 .sj-AI{color:var(--c-AI)}.s3 .sj-EE{color:var(--c-EE)}.s3 .sj-ECT{color:var(--c-ECT)}.s3 .sj-LAB{color:var(--c-LAB)}\n.s3 .what{display:block;margin-top:2px}.s3 .row input:checked+.txt .what{color:var(--mu);text-decoration:line-through}\n.s3 .examrow{display:flex;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid var(--bd)}\n.s3 .stamp{font:600 10.5px ui-monospace,Menlo,monospace;letter-spacing:.08em;color:var(--bad);border:1.5px solid var(--bad);border-radius:4px;padding:3px 6px;flex:none}.s3 .stamp.trip{color:var(--mu);border-color:var(--mu)}";document.head.appendChild(st);})();
const S3=(function(){
var SJ={MA:'Maths',MOS:'Mechanics of Solids',FM:'Fluid Mechanics',MP:'Manufacturing Processes',AI:'AI & DS',EE:'Ethics / EE',ECT:'ECT301 (Minor)',LAB:'Labs'};
var CHIP={MA:'MATHS',MOS:'MOS',FM:'FM',MP:'MP',AI:'AI',EE:'ETH/EE',ECT:'ECT301',ALL:'ALL',LAB:'LAB'};
var EXAMS=[
['2026-11-24','MA','GYMAT301','S'],
['2026-11-26','MOS','PCMET302','S'],
['2026-11-30','FM','PCMET303','S'],
['2026-12-02','MP','PBMET304','A+ / A'],
['2026-12-05','AI','GNEST305','S'],
['2026-12-08','EE','UCHUT346/347','A+']
];
var SLOTS={
free:['6:30–9:00 AM','9:30 AM–12:00','1:30–4:00 PM','4:30–5:30 PM','5:30–6:30 PM'],
college:['5:30–6:30 PM','7:00–8:00 PM','8:00–9:00 PM'],
sat:['6:30–9:00 AM','9:30 AM–12:00','1:30–4:00 PM'],
wknd:['9:30–11:00 AM · 90 min','11:15 AM–12:25 PM · 70 min','12:45–1:15 PM · 30 min','1:45–2:45 PM · 60 min','3:20–4:50 PM · 90 min','5:05–6:30 PM · 85 min']
};
var D=function(date,kind,blocks){return {date:date,kind:kind,blocks:blocks};};
var X=function(s,ev){
var b=[[s,'Formula glance only. No new problems.','6:30–9:00 AM'],[s,'Exam: '+SJ[s],'1:30–4:00 PM',1]];
if(ev)b.push([ev[0],ev[1],'4:30–6:30 PM']);
return b;
};
var PLAN=[
D('2026-10-25','wknd',[['AI','Retest question paper, part 1'],['AI','Retest question paper, part 2'],['LAB','MT lab: experiments, record and viva questions'],['ECT','Module 1: concepts and PYQs'],['ECT','Module 2: concepts and PYQs'],['LAB','CAD lab: commands and drawings, light']]),
D('2026-10-26','college',[['LAB','MT lab: quick viva run-through','5:00–7:00 AM'],['LAB','MT lab internal exam','Time: check with college',3],['AI','Retest question paper, final pass','5:15–6:30 PM'],['ECT','Modules 1–2 PYQs','7:00–7:45 PM'],['LAB','CAD lab: practice drawings and commands','7:45–8:30 PM']]),
D('2026-10-27','college',[['AI','Retest question paper, last run-through','5:00–7:00 AM'],['AI','AI retest (second series)','Time: check with college',2],['ECT','Modules 1–2 revision','5:15–6:30 PM'],['LAB','CAD lab: commands and drawings','7:00–7:45 PM'],['LAB','CAD lab: record and viva questions','7:45–8:30 PM']]),
D('2026-10-28','college',[['ECT','Modules 1–2 last revision','5:00–7:00 AM'],['LAB','CAD lab internal exam','Time: check with college',3],['ECT','ECT301 minor series exam, Modules 1–2','Time: check with college',2],['MA','Module 3, first pass','5:15–6:30 PM'],['FM','Module 3, first pass','7:00–7:45 PM'],['MOS','Module 3, first pass','7:45–8:30 PM']]),
D('2026-10-29','college',[['FM','Module 3, new content','5:00–7:00 AM'],['MOS','Module 3, new content','5:15–6:30 PM'],['MA','Module 3, new content','7:00–7:45 PM'],['MA','Module 3 problems','7:45–8:30 PM']]),
D('2026-10-30','college',[['FM','Module 4, new content','5:00–7:00 AM'],['MOS','Module 4, new content','5:15–6:30 PM'],['MA','Module 4, new content','7:00–7:45 PM'],['MA','Modules 3–4 problems (weak area)','7:45–8:30 PM']]),
D('2026-10-31','wknd',[['MP','Module 1, new content'],['MP','Module 2, new content'],['MP','Modules 1–2 important questions'],['AI','Modules 3–4 notes beyond the retest paper'],['MP','Module 3: rolling, forging, drawing, yield criteria'],['MP','Module 3 important questions']]),
D('2026-11-01','wknd',[['MA','Module 3, new content'],['FM','Module 3, new content'],['MOS','Module 3, new content'],['MA','Module 4, new content'],['FM','Module 4, new content'],['MOS','Module 4, new content']]),
D('2026-11-02','free',[['MP','Module 1, new content'],['MP','Module 2, new content'],['MP','Module 3: rolling, forging, drawing, yield criteria'],['MP','Module 4, new content'],['AI','Modules 3–4 notes beyond the retest paper']]),
D('2026-11-03','free',[['EE','Module 1, new content'],['EE','Module 2, new content'],['EE','Module 3, new content'],['EE','Module 4, new content'],['MA','Modules 3–4 problems (weak area)']]),
D('2026-11-04','free',[['FM','Modules 3–4 problems'],['MOS','Modules 3–4 problems'],['MA','Modules 3–4 problems, second round'],['MP','Modules 1–4 important questions'],['ALL','Recall FM, MOS and Maths formulas']]),
D('2026-11-05','free',[['FM','Modules 1–2 revision and numericals'],['MOS','Modules 1–2 revision and numericals'],['MA','Modules 1–2 problems'],['AI','Modules 1–2 revision'],['EE','Modules 1–2 revision']]),
D('2026-11-06','free',[['LAB','MT lab: experiments, procedure, viva'],['LAB','CAD lab: practice drawings and commands'],['FM','Modules 1–2 PYQs'],['MOS','Modules 1–2 PYQs'],['FM','Recall formulas']]),
D('2026-11-07','wknd',[['LAB','MT lab: record check and viva list'],['LAB','CAD lab: timed drawing practice'],['MA','Modules 1–2 PYQs'],['AI','Modules 3–4 PYQs'],['LAB','MT and CAD labs: final run-through'],['MA','Weak topics, light']]),
D('2026-11-08','lab',[['LAB','Quick revision for the lab exam today','9:30–11:00 AM'],['LAB','External lab exam: MT or CAD, confirm which','Time: check hall ticket and college',3],['FM','Modules 3–4 numericals','After the lab exam, until 6:30 PM']]),
D('2026-11-09','lab',[['LAB','Quick revision for the second lab exam','6:30–8:30 AM'],['LAB','External lab exam: MT or CAD, confirm which','Time: check hall ticket and college',3],['MOS','Modules 3–4 numericals','After the lab exam, until 6:30 PM']]),
D('2026-11-10','free',[['MA','Module 3 PYQs'],['MA','Module 4 PYQs'],['FM','Modules 1–2 PYQs'],['AI','Modules 1–2 problems'],['MA','Recall']]),
D('2026-11-11','free',[['FM','Module 3 PYQs'],['FM','Module 4 PYQs'],['MOS','Module 3 PYQs'],['MOS','Module 4 PYQs'],['FM','Recall']]),
D('2026-11-12','free',[['MA','Full PYQ paper, timed'],['MOS','Full PYQ paper, timed'],['FM','Full PYQ paper, timed'],['ALL','Mark the papers. List every mistake'],['ALL','Redo the three worst mistakes']]),
D('2026-11-13','free',[['AI','Full PYQ paper, timed'],['MP','Full PYQ paper, timed'],['EE','PYQs, Modules 1–4'],['MP','Write the important answers'],['ALL','Recall the mistakes from all papers']]),
D('2026-11-14','wknd',[['FM','Weak topics'],['MA','Weak topics'],['MOS','Weak topics'],['AI','Weak topics'],['FM','Modules 3–4 mixed numericals'],['ALL','Recall the mistakes list']]),
D('2026-11-15','wknd',[['MA','Timed half paper 2'],['MOS','Timed half paper 2'],['FM','Timed half paper 2'],['AI','Timed half paper 2'],['ALL','Mark the four papers. List mistakes'],['ALL','Redo the three worst mistakes']]),
D('2026-11-16','free',[['FM','Fix weak topics from the mock'],['MOS','Fix weak topics from the mock'],['MA','Fix weak topics from the mock'],['AI','Fix weak topics from the mock'],['ALL','Recall the mock mistakes']]),
D('2026-11-17','free',[['MP','Full revision. Write the important answers'],['EE','Revision and PYQs'],['AI','Revise notes and definitions'],['FM','One-page formula sheet'],['MP','Recall']]),
D('2026-11-18','free',[['MA','Formula sheet and 30 problems'],['MA','Remaining PYQ years'],['MOS','Formula sheet and problems'],['FM','Mixed-module problems'],['MA','Recall']]),
D('2026-11-19','free',[['MA','Timed paper 3'],['MA','Fix every mistake'],['MOS','Timed paper 3'],['FM','Timed paper 3'],['ALL','Recall']]),
D('2026-11-20','free',[['MOS','Final pass, summary of Modules 1–4'],['FM','Final pass, summary of Modules 1–4'],['AI','Final pass'],['MA','Error list'],['MOS','Recall']]),
D('2026-11-21','wknd',[['MA','Error list and formula sheet'],['MOS','Formula sheet'],['FM','Formula recall'],['MA','20 mixed problems'],['MA','Remaining PYQ years'],['MA','Recall the formula sheet']]),
D('2026-11-22','wknd',[['MA','Full revision, Modules 1–4'],['MA','Last timed half paper'],['MOS','Quick revision'],['FM','Quick skim'],['MA','Final error list'],['MA','Recall the formula sheet']]),
D('2026-11-23','exam',[['MA','Formulas and weak topics','6:30–9:00 AM'],['MOS','Light revision','9:30 AM–12:00'],['ALL','Rest. Pack hall ticket and pens. Sleep by 9:30 PM','Rest of the day']]),
D('2026-11-24','exam',X('MA',['MOS','Modules 1–2 quick numericals'])),
D('2026-11-25','free',[['MOS','Modules 1–2 numericals'],['MOS','Modules 3–4 numericals'],['MOS','Timed paper'],['MOS','Formula sheet'],['MOS','Light recall. Sleep early']]),
D('2026-11-26','exam',X('MOS',['FM','Modules 1–2 revision'])),
D('2026-11-27','free',[['FM','Modules 1–2 numericals'],['FM','Module 3 numericals'],['FM','Module 4 numericals'],['FM','PYQs'],['FM','Recall formulas']]),
D('2026-11-28','wknd',[['FM','Timed half paper'],['FM','Fix mistakes and weak topics'],['FM','Modules 3–4 numericals'],['FM','Derivations'],['FM','Mixed numericals'],['FM','Recall']]),
D('2026-11-29','wknd',[['FM','Final derivations and formulas'],['FM','Mixed numericals'],['FM','Timed half paper 2'],['FM','Light skim'],['FM','Weak topics, last pass'],['FM','Recall. Sleep early']]),
D('2026-11-30','exam',X('FM',['MP','Modules 1–2 important questions'])),
D('2026-12-01','free',[['MP','Modules 1–2 important questions'],['MP','Modules 3–4: rolling, forging, drawing, yield criteria'],['MP','PYQs'],['MP','Diagrams and sketches'],['MP','Recall']]),
D('2026-12-02','exam',X('MP',['AI','Modules 1–2 revision'])),
D('2026-12-03','free',[['AI','Modules 1–2'],['AI','Modules 3–4'],['AI','PYQs'],['AI','Short notes and definitions'],['AI','Recall']]),
D('2026-12-04','free',[['AI','Timed PYQ paper'],['AI','Weak topics'],['AI','Concepts and definitions'],['AI','Light revision'],['AI','Recall. Sleep early']]),
D('2026-12-05','exam',[['AI','Formula glance only. No new problems.','9:30–11:00 AM'],['AI','Exam: AI & DS','1:30–4:00 PM',1],['EE','Modules 1–2 revision','4:30–6:30 PM']]),
D('2026-12-06','wknd',[['EE','Modules 1–2'],['EE','Modules 3–4'],['EE','PYQs'],['EE','Short notes'],['EE','PYQs, timed'],['EE','Recall']]),
D('2026-12-07','free',[['EE','Timed PYQ paper'],['EE','Weak topics'],['EE','Revision'],['EE','Light revision'],['EE','Recall. Sleep early']]),
D('2026-12-08','exam',X('EE',null))
];
var PHASES=[
{n:1,t:'Finish the portions',to:'2026-11-03',note:'Internals first: MT lab on 26 Oct, AI retest on 27 Oct, CAD lab and the ECT301 series exam on 28 Oct. College runs through Fri 30 Oct (last class), so 29 and 30 Oct are college days too: study 5:00–7:00 AM, 5:15–6:30 PM and 7:00–8:30 PM on every college day. From Sat 31 Oct there are no more classes and nothing is scheduled after 6:30 PM. After that, Module 3 and 4 content you have not covered, S-target subjects first. Saturdays and Sundays: karate 7–9 AM, then sprints from 9:30 AM that end by 6:30 PM, working around your sister’s dance class (drop-off 1:20, pick-up 2:50). Because 29 to 31 Oct were missed, the content moved: Maths, FM and MOS Modules 3–4 on Sun 1 Nov, MP and AI on Mon 2 Nov, Ethics/EE on Tue 3 Nov. Modules 1–2 get problems and revision in the next phase.'},
{n:2,t:'Second pass and papers',to:'2026-11-23',note:'Problems and revision for Modules 1–2, then PYQs, then timed papers. A friend says the external MT and CAD lab exams are on 8 and 9 Nov. Confirm the dates and which lab is on which day with college. If they change, tell me and I will move the lab days.'},
{n:3,t:'Exam window',to:'2026-12-08',note:'One subject at a time. Exams run 1:30–4:00 PM, so the morning of each exam is a formula glance only. The evening of an exam day starts the next subject.'}
];
var pad=function(n){return (n<10?'0':'')+n;};
var keyOf=function(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
var parse=function(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2]);};
var WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var MO=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var fmt=function(s){var d=parse(s);return WD[d.getDay()]+' '+d.getDate()+' '+MO[d.getMonth()];};
var diff=function(a,b){return Math.round((parse(b)-parse(a))/864e5);};
var phaseOf=function(date){return date<=PHASES[0].to?1:(date<=PHASES[1].to?2:3);};
var $=function(id){return document.getElementById(id);};
var TODAY='',FIRST='',LAST=PLAN[PLAN.length-1].date;
function dn(){return S.s3||(S.s3={});}
function slotTime(day,i,b){var k=(b.oi!==undefined?b.oi:i);return b[2]||SLOTS[day.kind][k];}
/* weekend sister runs: drop 1:20–1:40 PM, pick-up 2:50–3:10 PM; task ids stay tied to the original block order */
PLAN.forEach(function(day){
day.blocks.forEach(function(b,i){b.oi=i;});
if(day.kind!=='wknd')return;
var out=[];
day.blocks.forEach(function(b,k){
if(k===3)out.push(['ALL','Drop sister at dance class','1:20–1:40 PM',4]);
if(k===4)out.push(['ALL','Pick sister up from dance class','2:50–3:10 PM',4]);
out.push(b);
});
day.blocks=out;
});
var allTasks=[];
PLAN.forEach(function(day){
day.blocks.forEach(function(b,i){
if(b[3])return;
allTasks.push({id:day.date+'.'+i,sj:b[0],date:day.date});
});
});
function taskRow(day,b,i){
var id=day.date+'.'+(b.oi!==undefined?b.oi:i), time=slotTime(day,i,b);
if(b[3]){
var st=b[3]===3?'LAB EXAM':(b[3]===2?'TEST':(b[3]===4?'SISTER':'EXAM'));
return '<li class="examrow"><span class="stamp'+(b[3]===4?' trip':'')+'">'+st+'</span><span class="txt"><span class="meta"><span class="time">'+time+'</span><span class="sj sj-'+b[0]+'">'+CHIP[b[0]]+'</span></span><span class="what">'+b[1]+'</span></span></li>';
}
return '<li><label class="row"><input type="checkbox" data-id="'+id+'" data-a="s3tick" data-k="'+id+'"'+(dn()[id]?' checked':'')+'><span class="txt"><span class="meta"><span class="time">'+time+'</span><span class="sj sj-'+b[0]+'">'+CHIP[b[0]]+'</span></span><span class="what">'+b[1]+'</span></span></label></li>';
}
function tagOf(day){
if(day.date==='2026-10-30')return 'Last class day';
if(day.kind==='college')return 'College day';
if(day.kind==='sat')return 'Light day';
if(day.date==='2026-10-25')return 'Karate 7–9 AM · Sister’s class 1:30–3 PM · AI, minor, labs only';
if(day.kind==='wknd')return 'Karate 7–9 AM · Sister’s class 1:30–3 PM';
if(day.kind==='lab')return 'Lab exam day';
if(day.blocks.some(function(b){return b[3];}))return 'Exam day';
if(day.date==='2026-11-23')return 'Day before Maths';
return '';
}
function dayHTML(day,isToday){
var tag=tagOf(day);
return '<article class="day'+(isToday?' today':'')+'"><div class="day-h"><h3>'+fmt(day.date)+'</h3><span class="tag'+(isToday?' now':'')+'">'+(isToday?'Today'+(tag?' · '+tag:''):tag)+'</span></div><ul>'+day.blocks.map(function(b,i){return taskRow(day,b,i);}).join('')+'</ul></article>';
}
function view(){
TODAY=keyOf(new Date());FIRST=PLAN[0].date;
var h='<div class="s3">';
var up=EXAMS.filter(function(e){return e[0]>=TODAY;})[0];
if(!up){h+='<div class="card"><b>All exams done</b></div>';}
else{
var n=diff(TODAY,up[0]);
h+='<div class="card"><div class="nx"><div class="big">'+n+'</div><div style="flex:1 1 130px;min-width:0"><b>'+(n===0?'Exam today: ':(n===1?'Day to ':'Days to '))+SJ[up[1]]+'</b><br><small>'+fmt(up[0])+' · '+up[2]+'</small></div><div class="ov"><small class="nm"><span>Blocks done</span><span id="ovNum"></span></small><div class="bar"><i id="ovBar"></i></div></div></div></div>';
}
var ev=[];
PLAN.forEach(function(day){day.blocks.forEach(function(b){if(b[3]&&b[3]!==4&&day.date>=TODAY)ev.push({date:day.date,sj:b[0],label:b[1]});});});
ev=ev.slice(0,6);
if(ev.length)h+='<h2>Coming up</h2><div class="card">'+ev.map(function(e){return '<div class="evr"><small class="evd">'+fmt(e.date)+'</small><span class="sj sj-'+e.sj+'">'+CHIP[e.sj]+'</span><span class="evt">'+e.label+'</span></div>';}).join('')+'</div>';
h+=todaySec();
h+='<h2>Exams and targets</h2><small class="mu">Target grade: S in Maths, Mechanics of Solids, Fluid Mechanics and AI &amp; DS. A+ in Ethics/EE. A+ or A in Manufacturing Processes. Exams run 1:30–4:00 PM.</small>';
h+='<div class="card" style="margin-top:8px">'+EXAMS.map(function(e){
var d=parse(e[0]),k=diff(TODAY,e[0]),left=k<0?'done':(k===0?'today':'in '+k+' d');
return '<div class="exb"><div class="exr"><div class="exd">'+WD[d.getDay()]+'<b>'+d.getDate()+' '+MO[d.getMonth()]+'</b></div><div class="exn"><b>'+SJ[e[1]]+'</b><small>'+e[2]+'</small></div><div class="exg"><span class="pill'+(e[3]==='S'?' s':'')+'">'+e[3]+'</span><small>'+left+'</small></div></div><div class="bar"><i data-sjbar="'+e[1]+'" style="background:var(--c-'+e[1]+')"></i></div><small class="exp"><span>Prep blocks</span><span data-sjnum="'+e[1]+'"></span></small></div>';
}).join('')+'</div>';
var cur=TODAY<=PHASES[0].to?1:(TODAY<=PHASES[1].to?2:3);
h+='<h2>Day by day</h2>'+PHASES.map(function(p){
var days=PLAN.filter(function(d){return phaseOf(d.date)===p.n;});
return '<details class="card ph"'+(p.n===cur?' open':'')+'><summary><b>'+p.t+'</b> <small>'+fmt(days[0].date)+' to '+fmt(days[days.length-1].date)+' · <span data-phnum="'+p.n+'"></span></small></summary><p class="mu">'+p.note+'</p>'+days.map(function(d){return dayHTML(d,d.date===TODAY);}).join('')+'</details>';
}).join('');
h+='</div>';
setTimeout(refresh,0);
return h;
}
function todaySec(){
var day=PLAN.filter(function(d){return d.date===TODAY;})[0];
if(day)return '<h2>Today</h2>'+dayHTML(day,true);
if(TODAY<FIRST){var n=diff(TODAY,FIRST);return '<h2>'+(n===1?'Starts tomorrow':'Starts in '+n+' days')+'</h2>'+dayHTML(PLAN[0],false);}
return '<h2>Done</h2><div class="card">All six exams are over. Open the plan below to see what you ticked.</div>';
}
function todayCard(){
TODAY=keyOf(new Date());
var day=PLAN.filter(function(d){return d.date===TODAY;})[0];
if(!day)return '';
setTimeout(refresh,0);
return '<div class="s3"><h2>S3 plan today</h2>'+dayHTML(day,true)+'</div>';
}
function refresh(){
var total=allTasks.length,n=0,per={},ph={},d=dn();
allTasks.forEach(function(t){
var ok=d[t.id]?1:0;n+=ok;
var s=per[t.sj]||(per[t.sj]={n:0,t:0});s.t++;s.n+=ok;
var p=phaseOf(t.date),q=ph[p]||(ph[p]={n:0,t:0});q.t++;q.n+=ok;
});
var on=document.getElementById('ovNum');if(on)on.textContent=n+' / '+total;
var ob=document.getElementById('ovBar');if(ob)ob.style.width=(total?100*n/total:0)+'%';
Array.prototype.forEach.call(document.querySelectorAll('[data-sjbar]'),function(el){var s=per[el.getAttribute('data-sjbar')]||{n:0,t:0};el.style.width=(s.t?100*s.n/s.t:0)+'%';});
Array.prototype.forEach.call(document.querySelectorAll('[data-sjnum]'),function(el){var s=per[el.getAttribute('data-sjnum')]||{n:0,t:0};el.textContent=s.n+' / '+s.t;});
Array.prototype.forEach.call(document.querySelectorAll('[data-phnum]'),function(el){var s=ph[el.getAttribute('data-phnum')]||{n:0,t:0};el.textContent=s.n+' / '+s.t+' done';});
}
function tick(id,on){
var d=dn();if(on)d[id]=1;else delete d[id];
save();
Array.prototype.forEach.call(document.querySelectorAll('input[data-id="'+id+'"]'),function(o){o.checked=on;});
refresh();
}
return {view:view,todayCard:todayCard,tick:tick};
})();
TABS.splice(2,0,['s3','S3 plan']);V.s3=()=>S3.view();A.s3tick=(k,b)=>S3.tick(k,b.checked);{const t0=V.today;V.today=()=>t0()+S3.todayCard()}R();
