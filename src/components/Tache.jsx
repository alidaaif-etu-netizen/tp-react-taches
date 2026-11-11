function Tache({ id, titre, terminee, onBasculer, onSupprimer }) {
  return (
    <li className={terminee ? 'tache terminee' : 'tache'}>
      <input
        type="checkbox"
        checked={terminee}
        onChange={() => onBasculer(id)}
        aria-label={`Marquer ${titre} comme ${terminee ? 'non terminée' : 'terminée'}`}
      />
      <span className="titre">{titre}</span>
      <button type="button" className="danger" onClick={() => onSupprimer(id)}>
        Supprimer
      </button>
    </li>
  )
}

export default Tache
