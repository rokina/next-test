import styles from '../styles/SearchForm.module.scss'

const SearchForm = () => {
  return (
    <form action="/search/" className={styles.form}>
      <input className={styles.form__input} placeholder="記事検索" type="text" name="q" size="10" />
      <input className={styles.form__button} type="submit" value="検索" method="get" />
    </form>
  );
}

export default SearchForm
