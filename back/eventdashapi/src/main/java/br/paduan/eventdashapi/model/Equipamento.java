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
@Table(name="itmn_equipamento")
public class Equipamento {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id // para indicar que este atributo faz ligação com a PK (Primary key) da tabela usuario
	@Column(name="id_equip")
	private int id_equip;
	
	@Column(name="hostname",length=50)
	private String hostnome;
	
	@Column(name="ipaddr",length=15)
	private String ipaddr;


/*     @JsonIgnoreProperties("id_equip")
	@OneToMany(mappedBy="id_equip", cascade=CascadeType.ALL)
	private List<Evento> equipamentos;
		
	public List<Evento> getEquipamentos() {
		return equipamentos;
	}

	public void setEquipamentos(List<Evento> equipamentos) {
		this.equipamentos = equipamentos;
	} */

	public Equipamento() {
		super();
	}

	public Equipamento(int id, String hostnome, String ip) {
		super();
		this.id_equip = id;
		this.hostnome = hostnome;
		this.ipaddr = ip;
	}

	public int getId_equip() {
		return id_equip;
	}

	public void setId_equip(int id) {
		this.id_equip = id;
	}

	public String getHostnome() {
		return hostnome;
	}

	public void setHostnome(String hostnome) {
		this.hostnome = hostnome;
	}

	public String getIpaddr() {
		return ipaddr;
	}

	public void setIpaddr(String ip) {
		this.ipaddr = ip;
	}
	
}

