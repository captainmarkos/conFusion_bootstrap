SELECT id, "name", type_id, group_id, klass, hidden, "mapping"
FROM public.providers where "name" ilike '%Membersuite%';


select count(*) from providers;


INSERT INTO public.providers ("name",type_id,group_id,klass,hidden,"mapping") VALUES 
('Membersuite Exhibitor',849362210,881965155,'Membersuite::Exhibitor',true,false);

==================================================================================================================================

Give a brief introduction to your project and the list of features. Summarize in a few sentences what you proposed in the ideation report.


Introduction - Fun Quizzes

An application that can read up the contents of a quiz (csv, database table,
hard-coded, ...) and display the quiz for a user to play.

The contents of quiz will be represented in a table format such as CSV and
might look like the following:

<pre>
IMAGE_NAME, QUESTION, ANSWER_A, ANSWER_B, ANSWER_C, ANSWER_D, CORRECT_ANSWER
balloonfish.jpg, Which fish is this?, Trunkfish, Hogfish, Balloonfish, Chub, C
moray.jpg, What the heck is this?, Viper, Tequila, Green Moray, Manytooth Conger, C
</pre>



User Interface Design and Prototype

[sample user interface layouts for your application]

[explain the rationale behind designing your UI]



Navigation Structure

The home page (index.html) will be the quiz.  Upon landing on the home page the
quiz will be served up.  When the quiz is finished it will have a "Try Again"
button which will then restart the quiz.



Briefly indicate a typical flow of your application in terms of user experience. 
