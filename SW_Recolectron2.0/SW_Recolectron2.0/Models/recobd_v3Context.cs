using System;
using System.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace SW_Recolectron2._0.Models
{
    public partial class recobd_v3Context : DbContext
    {
        private readonly string connectionString;

        public recobd_v3Context(string connectString)
        {
            connectionString = connectString;
        }

        public recobd_v3Context(DbContextOptions<recobd_v3Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Actividades> Actividades { get; set; }
        public virtual DbSet<Articulos> Articulos { get; set; }
        public virtual DbSet<CatalogoOrigen> CatalogoOrigen { get; set; }
        public virtual DbSet<CatalogoPeDeps> CatalogoPeDeps { get; set; }
        public virtual DbSet<CatalogoVisitas> CatalogoVisitas { get; set; }
        public virtual DbSet<CategoriasRe> CategoriasRe { get; set; }
        public virtual DbSet<ElementosQuimicos> ElementosQuimicos { get; set; }
        public virtual DbSet<Estados> Estados { get; set; }
        public virtual DbSet<Eventos> Eventos { get; set; }
        public virtual DbSet<Inventario> Inventario { get; set; }
        public virtual DbSet<InventarioRe> InventarioRe { get; set; }
        public virtual DbSet<InventarioSb> InventarioSb { get; set; }
        public virtual DbSet<MaterialEnEspera> MaterialEnEspera { get; set; }
        public virtual DbSet<MaterialEnEsperaRevision> MaterialEnEsperaRevision { get; set; }
        public virtual DbSet<PermisosUsuario> PermisosUsuario { get; set; }
        public virtual DbSet<RecepcionRe> RecepcionRe { get; set; }
        public virtual DbSet<RegistroActividades> RegistroActividades { get; set; }
        public virtual DbSet<RegistroEmisionDonacionesEstudiantes> RegistroEmisionDonacionesEstudiantes { get; set; }
        public virtual DbSet<RegistroEmisionDonacionesPg> RegistroEmisionDonacionesPg { get; set; }
        public virtual DbSet<RegistroRecepcionDonaciones> RegistroRecepcionDonaciones { get; set; }
        public virtual DbSet<RegistroVisitas> RegistroVisitas { get; set; }
        public virtual DbSet<RegistrodeComponentes> RegistrodeComponentes { get; set; }
        public virtual DbSet<RegistrodePublicogral> RegistrodePublicogral { get; set; }
        public virtual DbSet<ResiduosElectronicos> ResiduosElectronicos { get; set; }
        public virtual DbSet<SbActividades> SbActividades { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql(connectionString, x => x.ServerVersion("8.0.19-mysql"));
            }
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Actividades>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("actividades");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHoraFin)
                    .HasColumnName("Fecha_Hora_Fin")
                    .HasColumnType("datetime");

                entity.Property(e => e.FechaHoraInicio)
                    .HasColumnName("Fecha_Hora_Inicio")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdActividad).HasColumnName("ID_Actividad");
            });

            modelBuilder.Entity<Articulos>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("articulos");

                entity.Property(e => e.Articulo)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.IdArticulo).HasColumnName("idArticulo");
            });

            modelBuilder.Entity<CatalogoOrigen>(entity =>
            {
                entity.HasKey(e => e.IdOrigen)
                    .HasName("PRIMARY");

                entity.ToTable("catalogo_origen");

                entity.Property(e => e.IdOrigen).HasColumnName("id_Origen");

                entity.Property(e => e.OrigenTipo)
                    .IsRequired()
                    .HasColumnName("Origen_Tipo")
                    .HasColumnType("varchar(35)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<CatalogoPeDeps>(entity =>
            {
                entity.HasKey(e => e.IdPeDeps)
                    .HasName("PRIMARY");

                entity.ToTable("catalogo_pe_deps");

                entity.Property(e => e.IdPeDeps).HasColumnName("ID_PE_Deps");

                entity.Property(e => e.PeDependencia)
                    .IsRequired()
                    .HasColumnName("PE_Dependencia")
                    .HasColumnType("varchar(55)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<CatalogoVisitas>(entity =>
            {
                entity.HasKey(e => e.IdVisita)
                    .HasName("PRIMARY");

                entity.ToTable("catalogo_visitas");

                entity.Property(e => e.IdVisita).HasColumnName("ID_Visita");

                entity.Property(e => e.TipoVisita)
                    .IsRequired()
                    .HasColumnName("Tipo_Visita")
                    .HasColumnType("varchar(35)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<CategoriasRe>(entity =>
            {
                entity.HasKey(e => e.IdCRe)
                    .HasName("PRIMARY");

                entity.ToTable("categorias_re");

                entity.Property(e => e.IdCRe).HasColumnName("ID_cRE");

                entity.Property(e => e.Categoria)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<ElementosQuimicos>(entity =>
            {
                entity.HasKey(e => e.IdEq)
                    .HasName("PRIMARY");

                entity.ToTable("elementos_quimicos");

                entity.Property(e => e.IdEq).HasColumnName("ID_EQ");

                entity.Property(e => e.Daños)
                    .IsRequired()
                    .HasColumnType("varchar(160)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Elemento)
                    .IsRequired()
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<Estados>(entity =>
            {
                entity.HasKey(e => e.IdEstados)
                    .HasName("PRIMARY");

                entity.ToTable("estados");

                entity.Property(e => e.IdEstados).HasColumnName("ID_Estados");

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<Eventos>(entity =>
            {
                entity.HasKey(e => e.IdEventos)
                    .HasName("PRIMARY");

                entity.ToTable("eventos");

                entity.Property(e => e.IdEventos).HasColumnName("ID_Eventos");

                entity.Property(e => e.Descripción)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHora)
                    .HasColumnName("Fecha_Hora")
                    .HasColumnType("datetime");

                entity.Property(e => e.TituloEvento)
                    .IsRequired()
                    .HasColumnName("Titulo_Evento")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<Inventario>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("inventario");

                entity.Property(e => e.Articulo)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.IdArticulo).HasColumnName("ID_Articulo");

                entity.Property(e => e.Notas)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<InventarioRe>(entity =>
            {
                entity.HasKey(e => e.IdArticulo)
                    .HasName("PRIMARY");

                entity.ToTable("inventario_re");

                entity.HasIndex(e => e.Articulo)
                    .HasName("Articulo_idx");

                entity.HasIndex(e => e.FkiEstado)
                    .HasName("Estado_idx");

                entity.Property(e => e.IdArticulo).HasColumnName("ID_Articulo");

                entity.Property(e => e.FkiEstado).HasColumnName("FKI_Estado");

                entity.Property(e => e.Notas)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.PesoXUnidad).HasColumnName("Peso_x_Unidad");

                entity.HasOne(d => d.ArticuloNavigation)
                    .WithMany(p => p.InventarioRe)
                    .HasForeignKey(d => d.Articulo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Articulo");

                entity.HasOne(d => d.FkiEstadoNavigation)
                    .WithMany(p => p.InventarioRe)
                    .HasForeignKey(d => d.FkiEstado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKI_Estado");
            });

            modelBuilder.Entity<InventarioSb>(entity =>
            {
                entity.HasKey(e => e.IdInventarioSb)
                    .HasName("PRIMARY");

                entity.ToTable("inventario_sb");

                entity.HasIndex(e => e.ArticuloFk)
                    .HasName("Articulo_FK_idx");

                entity.HasIndex(e => e.EstadoFk)
                    .HasName("Estado_FK_idx");

                entity.Property(e => e.IdInventarioSb).HasColumnName("ID_inventarioSB");

                entity.Property(e => e.ArticuloFk).HasColumnName("Articulo_FK");

                entity.Property(e => e.EstadoFk).HasColumnName("Estado_FK");

                entity.Property(e => e.Notas)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.ArticuloFkNavigation)
                    .WithMany(p => p.InventarioSb)
                    .HasForeignKey(d => d.ArticuloFk)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Articulo_FK");

                entity.HasOne(d => d.EstadoFkNavigation)
                    .WithMany(p => p.InventarioSb)
                    .HasForeignKey(d => d.EstadoFk)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Estado_FK");
            });

            modelBuilder.Entity<MaterialEnEspera>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("material_en_espera");

                entity.Property(e => e.IdInventarioSb).HasColumnName("ID_inventarioSB");

                entity.Property(e => e.Material)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<MaterialEnEsperaRevision>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("material_en_espera_revision");

                entity.Property(e => e.IdInventarioSb).HasColumnName("ID_inventarioSB");

                entity.Property(e => e.Material)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.PesoXUnidad).HasColumnName("Peso_x_Unidad");
            });

            modelBuilder.Entity<PermisosUsuario>(entity =>
            {
                entity.HasKey(e => e.IdPermisos)
                    .HasName("PRIMARY");

                entity.ToTable("permisos_usuario");

                entity.Property(e => e.IdPermisos).HasColumnName("ID_Permisos");

                entity.Property(e => e.TipoUsuario)
                    .IsRequired()
                    .HasColumnName("Tipo_Usuario")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<RecepcionRe>(entity =>
            {
                entity.HasKey(e => e.IdRcRe)
                    .HasName("PRIMARY");

                entity.ToTable("recepcion_re");

                entity.HasIndex(e => e.FkRe)
                    .HasName("FK_RE_idx");

                entity.HasIndex(e => e.FkRecepcion)
                    .HasName("FK_Recepcion_idx");

                entity.Property(e => e.IdRcRe).HasColumnName("ID_RcRE");

                entity.Property(e => e.FkRe).HasColumnName("FK_RE");

                entity.Property(e => e.FkRecepcion).HasColumnName("FK_Recepcion");

                entity.Property(e => e.PesoXUnidad).HasColumnName("Peso_x_Unidad");

                entity.HasOne(d => d.FkReNavigation)
                    .WithMany(p => p.RecepcionRe)
                    .HasForeignKey(d => d.FkRe)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RE");

                entity.HasOne(d => d.FkRecepcionNavigation)
                    .WithMany(p => p.RecepcionRe)
                    .HasForeignKey(d => d.FkRecepcion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Recepcion");
            });

            modelBuilder.Entity<RegistroActividades>(entity =>
            {
                entity.HasKey(e => e.IdActividad)
                    .HasName("PRIMARY");

                entity.ToTable("registro_actividades");

                entity.HasIndex(e => e.FkaEstado)
                    .HasName("Estado_idx");

                entity.Property(e => e.IdActividad).HasColumnName("ID_Actividad");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHoraFin)
                    .HasColumnName("Fecha_Hora_Fin")
                    .HasColumnType("datetime");

                entity.Property(e => e.FechaHoraInicio)
                    .HasColumnName("Fecha_Hora_Inicio")
                    .HasColumnType("datetime");

                entity.Property(e => e.FkaEstado).HasColumnName("FKA_Estado");

                entity.HasOne(d => d.FkaEstadoNavigation)
                    .WithMany(p => p.RegistroActividades)
                    .HasForeignKey(d => d.FkaEstado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKA_Estado");
            });

            modelBuilder.Entity<RegistroEmisionDonacionesEstudiantes>(entity =>
            {
                entity.HasKey(e => e.IdEmision)
                    .HasName("PRIMARY");

                entity.ToTable("registro_emision_donaciones_estudiantes");

                entity.HasIndex(e => e.FkDependencia)
                    .HasName("PE_Dependencia_idx");

                entity.Property(e => e.IdEmision).HasColumnName("ID_Emision");

                entity.Property(e => e.Amaterno)
                    .IsRequired()
                    .HasColumnName("AMaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Apaterno)
                    .IsRequired()
                    .HasColumnName("APaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHora)
                    .HasColumnName("Fecha_Hora")
                    .HasColumnType("datetime");

                entity.Property(e => e.FkDependencia).HasColumnName("FK_Dependencia");

                entity.Property(e => e.Matricula)
                    .IsRequired()
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.FkDependenciaNavigation)
                    .WithMany(p => p.RegistroEmisionDonacionesEstudiantes)
                    .HasForeignKey(d => d.FkDependencia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Dependencia");
            });

            modelBuilder.Entity<RegistroEmisionDonacionesPg>(entity =>
            {
                entity.HasKey(e => e.IdDepublico)
                    .HasName("PRIMARY");

                entity.ToTable("registro_emision_donaciones_pg");

                entity.Property(e => e.IdDepublico).HasColumnName("ID_DEPublico");

                entity.Property(e => e.Causa)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.CorreoElectronico)
                    .IsRequired()
                    .HasColumnName("Correo_Electronico")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Destinatario)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHora)
                    .HasColumnName("Fecha_Hora")
                    .HasColumnType("datetime");

                entity.Property(e => e.Telefono)
                    .IsRequired()
                    .HasColumnType("varchar(15)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<RegistroRecepcionDonaciones>(entity =>
            {
                entity.HasKey(e => e.IdRecepcion)
                    .HasName("PRIMARY");

                entity.ToTable("registro_recepcion_donaciones");

                entity.HasIndex(e => e.Origen)
                    .HasName("Origen_idx");

                entity.Property(e => e.IdRecepcion).HasColumnName("ID_Recepcion");

                entity.Property(e => e.CorreoElectronico)
                    .IsRequired()
                    .HasColumnName("Correo_Electronico")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHora)
                    .HasColumnName("Fecha_Hora")
                    .HasColumnType("datetime");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Telefono)
                    .IsRequired()
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.OrigenNavigation)
                    .WithMany(p => p.RegistroRecepcionDonaciones)
                    .HasForeignKey(d => d.Origen)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Origen");
            });

            modelBuilder.Entity<RegistroVisitas>(entity =>
            {
                entity.HasKey(e => e.IdRegVisitas)
                    .HasName("PRIMARY");

                entity.ToTable("registro_visitas");

                entity.HasIndex(e => e.PeDependencia)
                    .HasName("PE_Dependencia_idx");

                entity.HasIndex(e => e.TipoVisita)
                    .HasName("Tipo_Visita_idx");

                entity.Property(e => e.IdRegVisitas).HasColumnName("ID_Reg_Visitas");

                entity.Property(e => e.Amaterno)
                    .IsRequired()
                    .HasColumnName("AMaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Apaterno)
                    .IsRequired()
                    .HasColumnName("APaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.FechaHora)
                    .HasColumnName("Fecha_Hora")
                    .HasColumnType("datetime");

                entity.Property(e => e.Matricula)
                    .IsRequired()
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnType("varchar(30)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.PeDependencia).HasColumnName("PE_Dependencia");

                entity.Property(e => e.TipoVisita).HasColumnName("Tipo_Visita");

                entity.HasOne(d => d.PeDependenciaNavigation)
                    .WithMany(p => p.RegistroVisitas)
                    .HasForeignKey(d => d.PeDependencia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PE_Dependencia");

                entity.HasOne(d => d.TipoVisitaNavigation)
                    .WithMany(p => p.RegistroVisitas)
                    .HasForeignKey(d => d.TipoVisita)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Tipo_Visita");
            });

            modelBuilder.Entity<RegistrodeComponentes>(entity =>
            {
                entity.HasKey(e => e.IdRdec)
                    .HasName("PRIMARY");

                entity.ToTable("registrode_componentes");

                entity.HasIndex(e => e.FkComponente)
                    .HasName("FK_Componente_idx");

                entity.HasIndex(e => e.FkRegistroDe)
                    .HasName("FK_RegistroDE_idx");

                entity.Property(e => e.IdRdec).HasColumnName("ID_RDEC");

                entity.Property(e => e.FkComponente).HasColumnName("FK_Componente");

                entity.Property(e => e.FkRegistroDe).HasColumnName("FK_RegistroDE");

                entity.HasOne(d => d.FkComponenteNavigation)
                    .WithMany(p => p.RegistrodeComponentes)
                    .HasForeignKey(d => d.FkComponente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Componente");

                entity.HasOne(d => d.FkRegistroDeNavigation)
                    .WithMany(p => p.RegistrodeComponentes)
                    .HasForeignKey(d => d.FkRegistroDe)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RegistroDE");
            });

            modelBuilder.Entity<RegistrodePublicogral>(entity =>
            {
                entity.HasKey(e => e.IdDepgral)
                    .HasName("PRIMARY");

                entity.ToTable("registrode_publicogral");

                entity.HasIndex(e => e.DeGral)
                    .HasName("DE_Gral_idx");

                entity.HasIndex(e => e.FkArticulo)
                    .HasName("Articulo_idx");

                entity.Property(e => e.IdDepgral).HasColumnName("ID_DEPGral");

                entity.Property(e => e.DeGral).HasColumnName("DE_Gral");

                entity.Property(e => e.FkArticulo).HasColumnName("FK_Articulo");

                entity.HasOne(d => d.DeGralNavigation)
                    .WithMany(p => p.RegistrodePublicogral)
                    .HasForeignKey(d => d.DeGral)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("DE_Gral");

                entity.HasOne(d => d.FkArticuloNavigation)
                    .WithMany(p => p.RegistrodePublicogral)
                    .HasForeignKey(d => d.FkArticulo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Articulo");
            });

            modelBuilder.Entity<ResiduosElectronicos>(entity =>
            {
                entity.HasKey(e => e.IdRe)
                    .HasName("PRIMARY");

                entity.ToTable("residuos_electronicos");

                entity.HasIndex(e => e.Categoria)
                    .HasName("Categoria_idx");

                entity.Property(e => e.IdRe).HasColumnName("ID_RE");

                entity.Property(e => e.CostoPromedioXUnidad).HasColumnName("Costo_Promedio_x_Unidad");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.CategoriaNavigation)
                    .WithMany(p => p.ResiduosElectronicos)
                    .HasForeignKey(d => d.Categoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Categoria");
            });

            modelBuilder.Entity<SbActividades>(entity =>
            {
                entity.HasKey(e => e.IdSbActividades)
                    .HasName("PRIMARY");

                entity.ToTable("sb_actividades");

                entity.HasIndex(e => e.FkAct)
                    .HasName("FK_Act_idx");

                entity.HasIndex(e => e.FkSb)
                    .HasName("FK_SB_idx");

                entity.Property(e => e.IdSbActividades).HasColumnName("idSB_Actividades");

                entity.Property(e => e.FkAct).HasColumnName("FK_Act");

                entity.Property(e => e.FkSb).HasColumnName("FK_SB");

                entity.HasOne(d => d.FkActNavigation)
                    .WithMany(p => p.SbActividades)
                    .HasForeignKey(d => d.FkAct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Act");

                entity.HasOne(d => d.FkSbNavigation)
                    .WithMany(p => p.SbActividades)
                    .HasForeignKey(d => d.FkSb)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SB");
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuarios)
                    .HasName("PRIMARY");

                entity.ToTable("usuarios");

                entity.HasIndex(e => e.TipoUsuario)
                    .HasName("Tipo_Usuario_idx");

                entity.Property(e => e.IdUsuarios).HasColumnName("ID_Usuarios");

                entity.Property(e => e.Amaterno)
                    .IsRequired()
                    .HasColumnName("AMaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Apaterno)
                    .IsRequired()
                    .HasColumnName("APaterno")
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Contrasenia)
                    .IsRequired()
                    .HasColumnType("varchar(16)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NombreUsuario)
                    .IsRequired()
                    .HasColumnType("varchar(25)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.TipoUsuario).HasColumnName("Tipo_Usuario");

                entity.HasOne(d => d.TipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.TipoUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Tipo_Usuario");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
