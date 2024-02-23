const getCourses = async () => {
    const res = await fetch('https://localhost:7211/api/courses')
    const data = await res.json()

    var element = document.getElementById('courses')


    for(let item of data) {
        var teachers = ""

        for (let teacher of item.teachers) {
            if (teachers.length > 0)
                teachers += ` & ${teacher.firstName} ${teacher.lastName}`
            else
            teachers += `${teacher.firstName} ${teacher.lastName}`
        }

        
        
        element.innerHTML += 
        `
        <div class="course">
            ${item.isBestseller ? '<div class="bestseller-tag">Best Seller</div>': ''}
            <button class="btn-save"><i class="fa-regular fa-bookmark"></i></button>
            <img src="images/courses/${item.courseImage}" alt="">
            
            <div class="content">
                <h5>${item.courseTitle}</h5>
                <p>By ${teachers}</p>
                <p class="price">$${item.price}</p>
                <hr>
                <div class="course-footer">
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        ${item.hours} hours
                    </div>
                    <div>
                        <i class="fa-regular fa-thumbs-up"></i>
                        ${item.likesInProcent * 100}% (${item.numberOfLikes / 1000}K)
                    </div>
                </div>
            </div>
        </div>
        
        `
    }
}

getCourses()

