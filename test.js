const objArrayect = [
  {
    "name": "b",
    "Problem_text": "E-mobility raises many questions, especially for people without their own charging facilitiesDuring our research phase, in which we conducted both quantitative surveys and qualitative interviews, we were able to identify   three fears of people in urban areas which we had to solve. The fear of not being able to find a unused charging station was mentioned as the most common argument against an electric vehicle.",
    "Problem_illustration": [
      {
        "url": "/uploads/problem_3_9b7dd8799a.png"
      },
      {
        "url": "/uploads/problem_1_98459236db.png"
      }]
}
    
    ]



    const found = objArrayect.find(element => element.name === 'b');

    console.log(found);







