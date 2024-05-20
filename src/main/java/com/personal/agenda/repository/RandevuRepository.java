package main.java.com.personal.agenda.repository;

import com.personal.agenda.model.Randevu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RandevuRepository extends JpaRepository<Randevu, Long> {
}
