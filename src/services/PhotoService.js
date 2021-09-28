export default class PhotoService {
    constructor(resource) {
        this._resource = resource('albums/1/photos')
    }

    listAll() {
        return this._resource
            .query()
            .then(res => res.json())
            .catch(err => {
                console.log(err)
                throw new Error(`Failed to load photos: ${JSON.stringify(err)}`)
            })
    }

    findById(id) {
        return this._resource
            .get({ id } )
            .then(res => res.json())
    }

    save(photo) {
        console.log(`Saving photo ${JSON.stringify(photo)}`)

        return new Promise((resolve, reject) => {
            if (!photo.thumbnailUrl || !photo.title) {
                reject(`Invalid photo ${JSON.stringify(photo)}`)
            }

            resolve(photo)
        })
    }

    delete(id) {
        console.log(`Removing photo with id ${id}`)
        return new Promise((resolve, reject) => {
            id = undefined

            if (!id) {
                reject(`Invalid id ${id}`)
            }

            resolve(id)
        })
    }
}