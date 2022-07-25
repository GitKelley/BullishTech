const assert = require('assert')
const chai = require('chai')
    , chaiHttp = require('chai-http')
chai.use(chaiHttp)

class StudentManagement {
    constructor(config) {
        this.config = config
    };

    async createStudent(config, studentDetails){
        const response = await chai.request(config['env']['base_url'])
            .post(this.config['endpoints']['create_student'])
            .send(studentDetails)
        return response;
    }

    async deleteStudent(config, studentId) {
        const response = await chai.request(config['env']['base_url'])
            .delete(this.config['endpoints']['delete_student'])
            .send(studentId)
        return response;
    }

    async getStudent(config, studentLocator) {
        if (typeof studentLocator === 'number') {
            const response = await chai.request(config['env']['base_url'])
                .get(this.config['endpoints']['get_student'] + `?id=${studentLocator}`)
            return response;
        } else {
            const response = await chai.request(config['env']['base_url'])
                .get(this.config['endpoints']['get_student'] + `?studentClass=${studentLocator}`)
            return response;
        }
    }

    async updateStudent(config, studentDetails) {
        const response = await axios.put(config['env']['base_url'] + this.config['endpoints']['update_student'], studentDetails
        )
        assert.equal(response.status, 200)
        return response;
    }
}
module.exports = StudentManagement