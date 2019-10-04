module.exports = {
    loginQuery: async (email, knex) => {
        if(!email){
            console.error('No Email Supplied')
            return null
        }
        const query_result = await knex
            .select('u.id', 'u.password_hash', 'u.email', 'u.first_name', 'u.last_name', 'p.img_src as portraitSrc')
            .leftJoin('photos as p', 'p.id', 'u.portrait_id')
            .from('users as u')
            .where('u.email', '=', email)
        if (query_result) return query_result[0]
        else return null
    }
}