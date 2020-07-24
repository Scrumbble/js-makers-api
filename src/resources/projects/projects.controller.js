import { Projects } from './projects.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
    await connect('mongodb://localhost:27017/jsmakersdb')
    const projects = await Projects.create({
        name: 'uvwxyz',
        description: 'Some description',
        createdBy: mongoose.Types.ObjectId(),
        liveUrl: 'https://famoron.co/',
        githubUrl: 'https://github.com/FamoronWebsite',
        story: 'A nice project story goes here...'
    })

    console.log(await Projects.find({}).exec())
}

run()