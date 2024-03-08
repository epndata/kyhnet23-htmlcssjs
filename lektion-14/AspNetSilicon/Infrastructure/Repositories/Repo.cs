using Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq.Expressions;

namespace Infrastructure.Repositories;

public abstract class Repo<TEntity>(DataContext context) where TEntity : class
{
    private readonly DataContext _context = context;


    public virtual async Task<TEntity> CreateOneAsync(TEntity entity)
    {
        try
        {
            _context.Set<TEntity>().Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return null!;
    }

    public virtual async Task<TEntity> GetOneAsync(Expression<Func<TEntity, bool>> predicate)
    {
        try
        {
            var result = await _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
            return result!;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return null!;
    }

    public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        try
        {
            var result = await _context.Set<TEntity>().ToListAsync();
            return result!;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return null!;
    }

    public virtual async Task<TEntity> UpdateOneAsync(Expression<Func<TEntity, bool>> predicate, TEntity updatedEntity)
    {
        try
        {
            var result = await _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
            if (result != null) 
            { 
                _context.Entry(result).CurrentValues.SetValues(updatedEntity);
                await _context.SaveChangesAsync();
                return result!; 
            }
            return result!;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return null!;
    }

    public virtual async Task<bool> DeleteOneAsync(Expression<Func<TEntity, bool>> predicate)
    {
        try
        {
            var result = await _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
            if (result != null)
            {
                _context.Set<TEntity>().Remove(result); 
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return false;
    }
}
