// $(document).ready(function() {
//     console.log("raj");
//     $('.author').each(function() {
//       let name = $(this).text().split(" ").charAt(0).touppercase();
//       $(this).prepend(name);
//     });
//   }); 

// $(document).ready(function() {
//     $('.issues-info').after($('.project-members'));
//     var link = $('.project-members a');
//     $('.project-members').append(link);
// });

document.addEventListener("DOMContentLoaded", function(){

    let container = document.querySelector('.custom-details');
    let issuesInfo = container.querySelector('.issues-info');
    let projectMembers= container.querySelector('.project-members');

    if(issuesInfo && projectMembers){
        container.insertBefore(projectMembers,issuesInfo.nextSibling);
    }

    let link = projectMembers.querySelector('a');
    if(link){
        projectMembers.appendChild(link);
    }
});


    