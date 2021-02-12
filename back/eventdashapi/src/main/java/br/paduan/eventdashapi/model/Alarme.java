package br.paduan.eventdashapi.model;

//import java.util.List;
//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity //Para informar o SpringBoot que esta classe tem uma tabela no BD
@Table(name="itmn_alarme")
public class Alarme {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id // para indicar que este atributo faz ligação com a PK (Primary key) da tabela usuario
	@Column(name="id_alarme")
	private int id_alarme;
	
	@Column(name="nome",length=100)
	private String nome;
	
	@Column(name="descricao",length=200)
	private String descricao;

	
 /* 	@JsonIgnoreProperties("id_alarme")
	//@OneToMany(targetEntity=Alarme.class, mappedBy="id_alarme",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@OneToMany(mappedBy="id_alarme",cascade=CascadeType.ALL)
	private List<Evento> eventos;
	
	public List<Evento> getEventos() {
		return eventos;
	}

	public void setEventos(List<Evento> eventos) {
		this.eventos = eventos;
	} */
    
	public int getId_alarme() {
		return id_alarme;
	}

	public void setId_alarme(int id_alarme) {
		this.id_alarme = id_alarme;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Alarme(int id_alarme, String nome, String descricao) {
		super();
		this.id_alarme = id_alarme;
		this.nome = nome;
		this.descricao = descricao;
	}

	public Alarme() {
		super();
	}

}