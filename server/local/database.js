module.exports = {
    loginQuery: async (email) => (
        await knex
            .select('u.id', 'u.password_hash', 'u.email', 'u.first_name', 'u.last_name', 'p.img_src as portraitSrc')
            .leftJoin('photos as p', 'p.id', 'u.portrait_id')
            .from('users as u')
            .where('u.email', '=', email)
    )
}