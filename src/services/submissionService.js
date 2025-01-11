const { fetchProblemDetails } = require('../apis/problemAdminApi');
const SubmissionProducer = require('../producers/submissionQueueProducer')

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    }

    async pingCheck(){
        return 'pong';
    }

    async addSubmission(submissionPayload){
        const problemId = submissionPayload.problemId;
        const userId = submissionPayload.userId;

        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        if(!problemAdminApiResponse){
            throw{message:"Not able to create submission"};
        }
        console.log(problemAdminApiResponse);
        const languageCodeStub = problemAdminApiResponse.data.codeStub.find(codeStub=>codeStub.language.toLowerCase()==submissionPayload.language.toLowerCase());
        submissionPayload.code = languageCodeStub.startSnippet +"\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;
        
        const submission = await this.submissionRepository.addSubmission(submissionPayload);
        if(!submission){
            throw{message:"Not able to create submission"};
        }
        const response = await SubmissionProducer({
            [submission._id]:{
                code :submission.code,
                language:submission.language,
                inputCase:problemAdminApiResponse.data.testCases[0].input,
                outputCase:problemAdminApiResponse.data.testCases[0].output,
                userId,
                submissionId:submission._id
            }
        });
        return {queueResponse:response,submission};
    }
}



module.exports = SubmissionService;