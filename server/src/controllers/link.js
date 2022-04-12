const { link } = require('../../models')

exports.addLink = async (req, res) => {
    try {
        const account_id = req.user.id;
        const { id } = req.params;
        const image = req.files.picture[0].filename;
        const data = req.body;

        const createLink = await link.create({
            picture: image,
            title: data.title,
            description: data.description,
            link1: data.link1,
            link2: data.link2,
            link3: data.link3,
            link4: data.link4,
            link5: data.link5,
            account_id: account_id,
            template_id: id,
        })

        res.send({
            status: 'success',
            data: {
                createLink
            },
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}

exports.getLinkId = async (req, res) => {
    try {
        const account_id = req.user.id;
        const linkId = await link.findAll({ where: { account_id: account_id } });

        res.send({
            status: 'success',
            data: {
                linkId
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.getLink = async (req, res) => {
    try {
        const { id } = req.params;
        const linkId = await link.findOne({ where: { id: id } });

        res.send({
            status: 'success',
            data: {
                linkId
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.updateLink = async (req, res) => {
    try {
        const data = req.body;
        const image = req.files.picture[0].filename;
        const { id } = req.params;

        console.log(data);
        await link.update({
            picture: image,
            title: data.title,
            description: data.description,
            link1: data.link1,
            link2: data.link2,
            link3: data.link3,
            link4: data.link4,
            link5: data.link5,
        }, { where: { id: id } })

        const patchLink = await link.findOne({ where: { id: id } });
        res.send({
            status: 'success',
            data: {
                patchLink
            }
        })

    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error,
        })
    }
}

exports.deleteLink = async (req, res) => {
    try {
        const { id } = req.params;

        await link.destroy({ where: { id: id } });

        res.send({
            status: 'success',
            data: {
                deleteLink: id
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'failed',
            massage: error
        })
    }
}