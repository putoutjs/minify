const{keys:a}=Object;function t(e){var n=[];return e instanceof Map?e.forEach((i,o)=>(r(i)==='object'&&(i=t(i)),n.push([o,i]))):a(e).forEach(o=>{})};