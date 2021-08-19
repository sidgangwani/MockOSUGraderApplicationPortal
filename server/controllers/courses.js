import request from 'request-promise';
import cheerio from 'cheerio';

export const getCourses =  async (req,res)=>{
    try {
        const result = await request.get("http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/");
        const $ = cheerio.load(result);
        const courses=[]
        $('#content > table > tbody > tr').each((index, element) => {
            let number=$(element).find('td:nth-child(1)>a').text();
            if(number!=="")
            {
                let course={
                    number:number,
                    name: $(element).find('td:nth-child(3)').text(),
                    credits: $(element).find('td:nth-child(4)').text().replace(/(\r\n|\n|\r)/gm, "").replace(/ /g, ""),
                    prequisites: $(element).find('td:nth-child(5)').text().replace(/(\r\n|\n|\r)/gm, ""),
                    exclusions: $(element).find('td:nth-child(6)').text().replace(/(\r\n|\n|\r)/gm, "")
                }
                courses.push(course);
            }
        }); 
        
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}