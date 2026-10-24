// 공개 프로젝트의 주요 기능 기록.
const updates = [
  // blog-history:start
  ["youtube", "2026-09-02", "블로그 · 최초 작성", "AI스럽지 않은 글쓰기", "번역투, 균등한 분량, 추상적인 표현을 사례로 살펴봅니다.", "blog/ai-tone-writing/index.html"],
  ["youtube", "2026-10-09", "블로그 · 최초 작성", "AI 활용, 어디까지 배워야 할까요?", "파일·Git·에이전트의 기초부터 첫 프로젝트까지.", "blog/ai-use-learning-path/index.html"],
  ["youtube", "2017-06-09", "블로그 · 최초 작성", "한국어 속 영어 읽기", "조사를 자동으로 고르기 위해 살펴본 영어 끝소리 규칙.", "blog/korean-english-reading-rules/index.html"],
  // blog-history:end
  ['math','2026-09-30','웹 · 개선','전략 게임 레벨 상승 개선','새 전략 게임에서 승리했을 때 레벨이 정상적으로 오르도록 수정했습니다.',''],
  ['math','2026-09-26','웹 · 기능 추가','별빛 전략 게임 3종 추가','전략 게임을 11종으로 확장하고 게임 선택 이미지와 작은 화면의 배치를 개선했습니다.',''],
  ['math','2026-09-19','주요 변경','별빛 전략 마을 추가','수학 마을에 별빛 전략 마을을 추가했습니다.',''],
  ['math','2026-05-09','주요 변경','숫자 왕국에서 수학 마을로','큰수·도형 변환 마을을 추가하고 별빛 섬 월드맵과 이야기 마을을 정리했습니다.',''],
  ['math','2025-06-06','기능 추가','나누기 추가','나누기 연습을 할 수 있게 되었습니다.',''],
  ['math','2024-07-27','학습 기록','두 자리 곱셈 연습','두 자리 곱셈 연습을 시작한 기록입니다.',''],
  ['math','2024-04-21','콘텐츠 추가','미술관 개관','숫자 왕국에 미술관을 추가했습니다.',''],
  ['math','2024-04-10','이야기 추가','9의 마술쇼','숫자 이야기 「9의 마술쇼」를 추가했습니다.',''],
  ['math','2024-02-24','기능 추가','빼기 게임 추가','빼기 연습 게임을 추가했습니다.',''],
  ['math','2024-02-13','기능·이야기 추가','구구단 게임과 나누기 대회 이야기','구구단 게임과 「나누기 대회」 이야기를 추가하고, 틀린 구구단 문제를 다시 풀도록 했습니다.',''],
  ['math','2024-02-04','시작','숫자 왕국의 시작','숫자 왕국을 처음 만들고 더하기 게임을 구현했습니다.',''],
  ['youtube','2026-10-18','영상 · 공개 확인','Part 3 · 이제 AI에게 첫 일을 맡겨볼까요?','GitHub와 VS Code로 첫 프로젝트를 시작하는 과정을 다룹니다.','https://youtu.be/Q20ftNEiTHw'],
  ['youtube','2026-10-18','영상 · 공개 확인','Part 2 · 파일 관리·Git·AI 에이전트 구성의 기초','AI와 프로젝트를 진행하기 전에 알아둘 파일, Git과 에이전트 구성을 정리했습니다.','https://youtu.be/B0Xl_UFucro'],
  ['youtube','2026-10-18','영상 · 공개 확인','Part 1 · 당신은 지금 몇 단계인가요?','AI 활용 단계를 살펴보는 시리즈 첫 영상입니다. 3편의 제목·썸네일과 재생목록을 정리했습니다.','https://youtu.be/EPqgwYw9b1A'],
  ['game','2026-09-26','게임 · 조작 개선','고양이 모험 모바일 조작 개선','양손 터치 조작, 드래그 이동, 전체화면과 화면 방향 선택을 추가했습니다. Flappy Bird의 모바일 터치도 개선했습니다.',''],
  ['game','2026-08-31','게임 · 기능 추가','Flappy Bird 모바일 지원','터치·클릭 입력과 가로·세로 화면 전환을 지원하고 전환 중 진행 상태를 유지합니다.',''],
  ['game','2026-08-17','게임 · 기능 추가','Cave Run·Flappy Bird 효과음','두 게임에 효과음과 음소거 기능을 추가했습니다.',''],
  ['game','2026-08-15','게임 · 기능 추가','Flappy Bird 게임 요소 확장','코인·콤보, 움직이는 파이프, 보호막과 보너스 구간을 추가했습니다.',''],
  ['game','2026-08-10','게임 · 기능 추가','Cave Run 10레벨과 맵 선택','레벨 선택, 잠금·진행 표시와 한국어 안내를 추가하고 캠페인을 10레벨로 확장했습니다.',''],
  ['game','2026-08-09','새 게임','Cave Run','파기·추격·구조 규칙을 사용하는 협동 보석 도굴 게임을 추가했습니다.',''],
  ['game','2026-08-06','게임 · 기능 추가','Campfire Keepers 진행 저장','클리어 자동 저장, 플레이어별 점수 상세와 레벨 코드를 통한 진행 복원을 추가했습니다.',''],
  ['game','2026-07-18','새 게임','Campfire Keepers','함께 전투하고 자원을 모으며 모닥불을 지키는 협동 생존 게임을 추가했습니다.',''],
  ['game','2026-07-17','새 게임','Rift Sentinel','별도 실행 가능한 아레나 슈팅 게임을 추가했습니다.',''],
  ['game','2026-05-04','새 게임','Starfall Lock-On·No-Guess Mine','조준 슈팅 게임과 추측 없이 풀 수 있는 지뢰찾기를 게임 목록에 추가했습니다.',''],
  ['game','2026-05-04','시작','Lilarca 게임 허브','고양이 모험과 Flappy Bird를 플레이하는 웹 게임 허브를 만들고, 한국어·영어 전환과 게임 스크린샷을 추가했습니다.','']
].sort((a,b)=>b[1].localeCompare(a[1]));
const names={math:'수학 마을',youtube:'Still Thinking.log',game:'게임 실험실'};
const icons={math:'assets/math-icon.webp',youtube:'assets/logo.png',game:'assets/lilarca.ico'};
const list=document.querySelector('#update-list');
function element(tag,text,className){const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
function render(filter){
 list.replaceChildren();
 const shown=updates.filter(u=>filter==='all'||u[0]===filter);
 for(const [project,date,type,title,body,source] of shown){
  const item=element('li','');const meta=element('div','','update-meta');
  const projectLink=element('a','','update-project-link');projectLink.href='#'+project;projectLink.setAttribute('aria-label',names[project]+' 프로젝트로 이동');
  const icon=document.createElement('img');icon.src=icons[project];icon.alt='';icon.width=36;icon.height=36;projectLink.append(icon);
  const time=element('time',date);time.dateTime=date;
  meta.append(projectLink,time,element('span',names[project]+' · '+type));
  item.append(meta,element('h3',title),element('p',body));
  if(source.startsWith('blog/')){const a=element('a','글 읽기 →');a.href=source;item.append(a);}
  else if(source.startsWith('https:')){const a=element('a',project==='youtube'?'영상 보기 ↗':'Google Play 보기 ↗');a.href=source;a.target='_blank';a.rel='noopener noreferrer';item.append(a);}
  list.append(item);
 }
 document.querySelector('#update-count').textContent=shown.length+'개의 주요 기록';
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
const tabs=[...document.querySelectorAll('[role="tab"]')];
function route(){
 const history=location.hash.startsWith('#history');const requested=location.hash.split('/')[1];const filter=Object.hasOwn(names,requested)?requested:'all';
 document.querySelector('#projects').hidden=history;document.querySelector('#history').hidden=!history;
 tabs.forEach((t,i)=>{const active=history?i===1:i===0;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
 if(history)render(filter);
 if(document.activeElement.closest('[hidden]'))tabs[history?1:0].focus({preventScroll:true});
 const anchor=location.hash.slice(1);
 document.querySelectorAll('.project-nav a').forEach(a=>{if(a.hash===location.hash)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 if(!history && (Object.hasOwn(names,anchor)||anchor==='blog'))requestAnimationFrame(()=>document.getElementById(anchor).scrollIntoView({block:'start'}));
 if(history || anchor==='projects')window.scrollTo({top:0,behavior:'instant'});
}
tabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>{location.hash=index?'history/all':'projects';});
 tab.addEventListener('keydown',event=>{let next;if(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown'].includes(event.key))next=1-index;else if(event.key==='Home')next=0;else if(event.key==='End')next=1;else return;event.preventDefault();tabs[next].focus();tabs[next].click();});
});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{location.hash='history/'+b.dataset.filter;}));
document.querySelectorAll('[data-recent]').forEach(box=>{
 const project=box.dataset.recent;const recent=updates.filter(u=>u[0]===project).slice(0,3);
 const head=element('div','','recent-head');head.append(element('span','최근 History','tag'));
 const a=element('a','전체 보기 →');a.href='#history/'+project;head.append(a);box.append(head);
 const rows=element('ul','','recent-rows');
 for(const u of recent){const row=element('li','');const time=element('time',u[1]);time.dateTime=u[1];const title=element('span',u[3]);title.title=u[3];row.append(time,title);rows.append(row);}
 box.append(rows);
});
window.addEventListener('hashchange',route);route();
